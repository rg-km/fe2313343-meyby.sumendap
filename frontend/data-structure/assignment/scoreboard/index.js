class Score {
    constructor(name, correct, wrong, empty) {
        this.name = name
        this.correct = correct
        this.wrong = wrong
        this.empty = empty
    }
}

class Scores {
    constructor(scores) {
      this.scores = scores
    }

    topStudents() {
        this.scores.sort((a, b) => {
          let org1 = 4 * a.correct - a.wrong
          let org2 = 4 * b.correct - b.wrong
            if (org1 > org2) {
                return -1
            } else if (org1 < org2) {
                return 1
            }
    
            if (a.correct > b.correct) {
                return -1
            } else if (a.correct < b.correct) {
                return 1
            }
            return 0
        })

        let names = []
        for (let i = 0; i < this.scores.length; i++) {
          names.push(this.scores[i].name)
        }

        return names
    }
}

let erico = new Score("Erico", 3, 2, 2)
let amario = new Score("amario", 3, 4, 0)
let rico = new Score("rico", 3, 0, 4)
let scores = new Scores([erico, amario, rico])
console.log(scores.topStudents())
module.exports = {
    Score,
    Scores
}
