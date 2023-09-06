const db = require('../config/config')

const Scores = {};

Scores.create = (Scores, result)=>{

    const sql = `INSERT INTO scores(score, created_at, user_id )  VALUES (?, ? , ?)`

    db.query(
        sql,
        [
            Scores.score,
            new Date(),
            Scores.user_id,
        ],
        (err, res) => {
            if (err){
                console.log('ERROR: ', err)
                result(err, null)
            }
            else{
                console.log('Id del score: ', res.insertId);
                result(null, res.insertId)
            }
        }
    )
}

Scores.update = async ( user, result) => {
    const sql = `
    UPDATE
        scores
    SET
    score,
    update_at =?,
    Where
        id =?
    `;

    db.query(
        sql,
        [
            Scores.score,
            new Date()
        ],
        (err, user) => {
            if (err) {
                console.log('ERROR:', err);
            }
            else {
                console.log('score  ACTUALIZADO: ', Scores);
                result(null, true);
            }
        }
    )

};
module.exports = Scores;