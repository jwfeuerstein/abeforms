package router

import (
	"../middleware"
	"github.com/gorilla/mux"
)

// Router is exported and used in main.go
func Router() *mux.Router {

	router := mux.NewRouter()

	//router.HandleFunc("/api/client", middleware.GetAllLawyerEmails).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/client", middleware.CreateClientsInfo).Methods("POST", "OPTIONS")

	return router
}
