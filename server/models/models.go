package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Clients struct {
	ID           primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	FirstName    string             `json:"FirstName,omitempty"`
	LastName     string             `json:"LastName,omitempty"`
	PhoneNumber  string             `json:"PhoneNumber,omitempty"`
	EmailAddress string             `json:"EmailAddress,omitempty"`
	Description  string             `json:"Description,omitempty"`
	StateOfIssue string             `json:"StateOfIssue,omitempty"`
	FindHow      string             `json:"FindHow,omitempty"`
	SocialMedia  string             `json:"SocialMedia,omitempty"`
}
