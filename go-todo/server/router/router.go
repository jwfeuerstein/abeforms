package router

import (
	"../middleware"
	"github.com/gorilla/mux"
)

// Router is exported and used in main.go
func Router() *mux.Router {

	router := mux.NewRouter()

	router.HandleFunc("/api/task", middleware.GetAllLawyerEmails).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/task", middleware.CreateClientsInfo).Methods("POST", "OPTIONS")

	return router
}
