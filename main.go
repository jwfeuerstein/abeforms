package main

func main() {
	//emailList := make([]string, 10)
	//sendEmail(emailList)
	totalFile := readCSV("lawyers.csv")
	parseLawyer(totalFile, "NA")
}
