const Player = require("../11-oop-steal-gold-cp/index");

class Thief extends Player {
  constructor(name) {
    super(name);
    this.job = "Thief";
  }
  
  robbedBlind() {
    // TODO: answer here
    if(this.gold >= 10){
      this.setGold(this.getGold() - 10)
      this.stealChance = 0.75
    } else {
      return "Aku terlalu miskin"
    }
  }

  steal(player) {
    // TODO: answer here
    if(player.getGold() <= 5) return "Lawan terlalu miskin";
    if(this.randomizer() > this.getStealChance()) return "Gagal mencuri, coba lain kali";
    
    player.setGold(player.getGold() - 5);
    this.setGold(this.getGold() + 5);
    
    if(player.job && player.job === 'Trickster') return player.distractionPurse(this);
    
    this.setHasBeenRobbed(true);
    return "Berhasil mencuri 5 gold";
  }
}

class Trickster extends Player {
  constructor(name) {
    super(name);
    this.distractionPurseChance = 0.25;
    this.job = "Trickster";
  }

  setDistractionPurseChance(chance) {
    // TODO: answer here
    this.distractionPurseChance = chance
  }

  getDistractionPurseChance() {
    // TODO: answer here
    return this.distractionPurseChance
  }

  distractionPurse(player) {
    const rng = this.randomizer();
    // TODO: answer here
    if (rng > this.distractionPurseChance) return 'Gagal mencuri balik';
    if(player.getGold() >= 10){
      player.setGold(player.getGold() - 10);
      this.gold = this.getGold() + 10;
      return 'Berhasil mencuri balik 10 gold';
    }

    if(player.getGold() < 10){
      this.gold = player.getGold() + this.getGold()
      player.setGold(0)
      return 'Berhasil mencuri balik semua uang lawan';
    }
  }

  steal(player) {
    // TODO: answer here
    if(this.randomizer() > this.getStealChance()) return "Gagal mencuri, coba lain kali"

    if(player.job && player.job === 'Trickster') return player.distractionPurse(this);

    if (player.getGold() <= 5) return "Lawan terlalu miskin";

    player.setGold(player.getGold() - 5);
    this.setGold(this.getGold() + 5);
    this.setHasBeenRobbed(true);
    return `Berhasil mencuri 5 gold`;
  }
}

// Dilarang menghapus code dibawah ini!!!
module.exports = {
  Thief,
  Trickster,
};
