package main

func match(rows [][]string, location string) []string {
	var matchedLawyers []string
	for i := range rows {
		if i != 0 && rows[i][3] == location { //rows[i]['Licensed']
			matchedLawyers = append(matchedLawyers, rows[i][3])
		}
	}
	return matchedLawyers
}
