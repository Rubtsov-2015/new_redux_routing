function request(url) {
	return fetch(url).then(r => r.json())
}

export default request