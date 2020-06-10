package main

import (
	"net/http"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	//emailList := make([]string, 10)
	//sendEmail(emailList)
	/*totalFile := readCSV("lawyers.csv")
	matchedLawyers := parseEmails(totalFile)
	fmt.Println(matchedLawyers)
	//sendEmail(matchedLawyers)*/
	router := gin.Default()

	// Serve frontend static files
	router.Use(static.Serve("/", static.LocalFile("./views", true)))

	// Setup route group for the API
	api := router.Group("/api")
	{
		api.GET("/", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "pong",
			})
		})
	}
	api.POST("/data/:dataID/", customerData)

	// Start and run the server
	router.Run(":3000")

}

func customerData(c *gin.Context) {
	c.Header("Content-Type", "application/json")
	c.JSON(http.StatusOK, gin.H{
		"message": "customerData handler not implemented yet",
	})
}
