package middleware

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/smtp"

	"../models"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// DB connection string
// for localhost mongoDB
// const connectionString = "mongodb://localhost:27017"
const connectionString = "mongodb+srv://akkshay:%40Whatever12@abelegal-rrztu.gcp.mongodb.net/test"

// Database Name
const dbName = "AbeDB"

// Collection name
const collName = "clients"
const lawName = "lawyers"

// collection object/instance
var collection *mongo.Collection
var lawyerCollection *mongo.Collection

// create connection with mongo db
func init() {

	// Set client options
	clientOptions := options.Client().ApplyURI(connectionString)

	// connect to MongoDB
	client, err := mongo.Connect(context.TODO(), clientOptions)

	if err != nil {
		log.Fatal(err)
	}

	// Check the connection
	err = client.Ping(context.TODO(), nil)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Connected to MongoDB!")

	collection = client.Database(dbName).Collection(collName)
	lawyerCollection = client.Database(dbName).Collection(lawName)

	fmt.Println("Collection instance created!")
}

//Template for future projects -> Grabs all clients infos
func getClientsInfo() []primitive.M {
	cur, err := collection.Find(context.Background(), bson.D{{}})
	if err != nil {
		log.Fatal(err)
	}
	var results []primitive.M
	for cur.Next(context.Background()) {
		var result bson.M
		e := cur.Decode(&result)
		if e != nil {
			log.Fatal(e)
		}
		results = append(results, result)

	}
	if err := cur.Err(); err != nil {
		log.Fatal(err)
	}

	cur.Close(context.Background())
	return results
}

// GetAllLawyerEmails Gets all the email addresses of lawyers from the database
func GetAllLawyerEmails() []primitive.M {
	cur, err := collection.Find(context.Background(), bson.D{{}})
	if err != nil {
		log.Fatal(err)
	}
	var results []primitive.M
	for cur.Next(context.Background()) {
		var result bson.M
		e := cur.Decode(&result)
		if e != nil {
			log.Fatal(e)
		}
		results = append(results, result)

	}
	if err := cur.Err(); err != nil {
		log.Fatal(err)
	}

	cur.Close(context.Background())
	return results
}

func sendEmails(lawyerEmails []string, name string, clientEmail string) {
	fmt.Println("Goes to Emails")
	auth := smtp.PlainAuth("", "austin.abe.legal@gmail.com", "ambusher922", "smtp.gmail.com")
	// Here we do it all: connect to our server, set up a message and send it
	to := lawyerEmails
	msg := []byte("To: " + clientEmail + "\r\n" +
		"Subject: New Client Alert\r\n" +
		"\r\n" +
		name + "\r\n")
	err := smtp.SendMail("smtp.gmail.com:587", auth, "austin.abe.legal@gmail.com", to, msg)
	if err != nil {
		log.Fatal(err)
	} else {
		fmt.Println("Emails is sent")
	}
}

// CreateClientsInfo Posts info of client to the next task at hand
func CreateClientsInfo(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	var client models.Clients
	_ = json.NewDecoder(r.Body).Decode(&client)
	insertOneClient(client)
	json.NewEncoder(w).Encode(client)
	//fmt.Println(getClientsInfo())
	//go getAllLawyers()
	fmt.Println(client)
	lawyersPrimitive := getAllLawyers()
	var lawyersEmails []string
	for _, b := range lawyersPrimitive {
		lawyersEmails = append(lawyersEmails, b[("email")].(string))
	}
	fmt.Println(lawyersEmails)
	sendEmails(lawyersEmails, client.FirstName, client.EmailAddress)

}

//
func insertOneClient(client models.Clients) *mongo.InsertOneResult {
	insertResult, err := collection.InsertOne(context.Background(), client)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Inserted a Single Record: ", insertResult.InsertedID)
	return insertResult
} //insertResult contains all info

// get all task from the DB and return it
func getAllLawyers() []primitive.M {
	cur, err := lawyerCollection.Find(context.Background(), bson.D{{}})
	if err != nil {
		log.Fatal(err)
	}

	var results []primitive.M
	for cur.Next(context.Background()) {
		var result bson.M //bson Map object {"a": 1, "b": true}
		e := cur.Decode(&result)
		if e != nil {
			log.Fatal(e)
		}
		// results will contain the emails of lawyers
		results = append(results, result)

	}

	if err := cur.Err(); err != nil {
		log.Fatal(err)
	}

	cur.Close(context.Background())
	return results //primitive.M object of bSON objects
}
