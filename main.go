package main

import "fmt"

func main() {
	//emailList := make([]string, 10)
	//sendEmail(emailList)
	totalFile := readCSV("lawyers.csv")
	fmt.Println(parseEmails(totalFile, "NA"))
}
