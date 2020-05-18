class DateBase {
    constructor(date) { 
        if(DateBase.exist) return DateBase.instance;
        DateBase.instance = this;
        DateBase.exist = true;
        this.date = date;
    }

    getDate() {
        return this.date;
    }
}

const mongoDB = new DateBase('MongoDB');
console.log(mongoDB.getDate()); // MongoDB

const sql = new DateBase('SQL')
console.log(mongoDB.getDate()); // MongoDB
