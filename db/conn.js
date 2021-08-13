const mongoose = require("mongoose");

const Db =
"mongodb+srv://sarthakk:93401@cluster0.kwba4.mongodb.net/DashboardData?retryWrites=true&w=majority";
mongoose
    .connect(Db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log("Connection Successfull");
    })
    .catch((e) => {
        console.log(e);
    });