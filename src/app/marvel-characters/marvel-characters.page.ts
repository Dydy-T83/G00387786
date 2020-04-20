import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvel-characters',
  templateUrl: './marvel-characters.page.html',
  styleUrls: ['./marvel-characters.page.scss'],
})
export class MarvelCharactersPage{
  //I wanted to use String Interpolation (Data Binding) for each movies whith their titles and contents
  title1:string="Captain America";
  content1:string="Captain Steven Grant (Steve) Rogers is a World War II veteran, a founding member of the Avengers, and Earth's first superhero. Rogers had suffered from numerous health problems, and upon America's entry into World War II, was rejected from the service within United States Army despite several attempts to enlist. Rogers was the only recipient of the Super Soldier Serum developed by Abraham Erskine under the Strategic Scientific Reserve. Determined to serve, Rogers ultimately volunteered for the Project Rebirth, which enhanced the frail Rogers' body. Mistrusted by Chester Phillips, the head of the SSR, Rogers was relegated to propaganda campaigns, and was given the new moniker of Captain America.";
  title2:string="Iron Man";
  content2:string="Anthony Edward (Tony) Stark was a billionaire industrialist, a founding member of the Avengers, and the former CEO of Stark Industries. A brash but brilliant inventor, Stark was self-described as a genius, billionaire, playboy, and philanthropist. With his great wealth and exceptional technical knowledge, Stark was one of the world's most powerful men following the deaths of his parents and enjoyed the playboy lifestyle for many years until he was kidnapped by the Ten Rings in Afghanistan, while demonstrating a fleet of Jericho missiles. With his life on the line, Stark created an armored suit which he used to escape his captors. Upon returning home, he utilized several more armors to use against terrorists, as well as Obadiah Stane who turned against Stark. Stark enjoyed the fame that came with his new secret identity and decided to share it with the world, publicly revealing himself as Iron Man.";
  title3:string="Hulk";
  content3:string="Robert Bruce Banner, is a renowned scientist and a founding member of the Avengers. As someone who was highly respected for his work regarding biochemistry, nuclear physics, and gamma radiation, he was commissioned by Thaddeus Ross to recreate the Super Soldier Serum which created Captain America, although Ross elected not to inform Banner what he was creating. However, when an exposure to high levels of gamma radiation instead of vita radiation went awry, the mild-mannered scientist had found that when angered, provoked or excited, he would transform into the huge, rage-fueled, nearly mindless creature known as Hulk.";
  title4:string="Thor";
  content4:string="Thor Odinson is the Asgardian God of Thunder, the former king of Asgard and New Asgard, and a founding member of the Avengers. When his irresponsible and impetuous behavior reignited a conflict between Asgard and Jotunheim, Thor was denied the right to become king, stripped of his power, and banished to Earth by Odin. While exiled on Earth, Thor learned humility, finding love with Jane Foster, and helped save his new friends from the Destroyer sent by Loki. Due to his selfless act of sacrifice, Thor redeemed himself in his father's eyes and was granted his power once more, which he then used to defeat Loki's schemes of genocide.";
  title5:string="Black Widow";
  content5:string="Natalia Alianovna (Natasha) Romanoff, also known as Black Widow, was one of the most talented spies and assassins in the entire world and a founding member of the Avengers. Originally a KGB operative and dangerous assassin, Romanoff was recruited into S.H.I.E.L.D. by Clint Barton. Having extensive mastery in martial arts and armed with her Widow's Bite, Black Widow became one of S.H.I.E.L.D.'s most efficient agents. During one mission, she was sent undercover into Stark Industries to watch Tony Stark due to the fear that he was dying. During this mission, Romanoff assisted Stark with defeating Ivan Vanko's terrorist plots against him.";
  title6:string="Hawkeye";
  content6:string="Clinton Francis (Clint) Barton, also known as Hawkeye, is a skilled marksman, a former special agent of S.H.I.E.L.D. and one of the founding members of the Avengers. Known for his use of the bow and arrow as his primary weapon, Barton had become one of the best agents of S.H.I.E.L.D., responsible for the recruitment of Black Widow, whom he developed a strong friendship with. Assigned by Nick Fury into watching over the Tesseract, he was brainwashed by Loki and used as his pawn for all his evil schemes. However, following their Attack on the Helicarrier, he was freed from Loki's mental controls by Black Widow and joined the Avengers to fight against Loki's Chitauri army in the Battle of New York, ending Loki's Invasion, before Hawkeye had returned to his work as a S.H.I.E.L.D. agent.";

  constructor() { }


}
