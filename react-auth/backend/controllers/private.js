exports.getPrivateData = (req, res, next) => {
	res.status(200).json({
		status: true,
		data: "Private Data Accessed",
	});
};
