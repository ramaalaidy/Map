const heros = [
    {name: 'Iron Man', power: 'Tech'},
    {name: 'Spider-Man', power: 'Spider abilities'},
    {name: 'Thor', power: 'Godly powers'},
    {name: 'Hulk', power: 'Super strength'}
  ];
  
  const newHeros = heros.map((hero, index) => ({
    hero: hero.name,   
    power: hero.power, 
    id: index          
  }));
  
  console.log(newHeros);
  