$(document).ready(function(){
    const data = [	
{ 
	"name": "Godfather (Mafia)", 
	"team": "impostor", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": "Der Godfather ist ein normaler Impostor",
	"notes": ""
},
{
    "name": "Mafioso (Mafia)", 
	"team": "impostor", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": "Der Mafioso ist ein Impostor, der nicht töten kann, bis der Godfather tot ist",
	"notes": ""
},
{
    "name": "Janitor (Mafia)", 
	"team": "impostor", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": "Der Janitor ist ein Impostor, der nicht töten, aber Leichen verstecken kann",
	"notes": ""
},
{
    "name": "Morphling", 
	"team": "impostor", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": "Der Morphling ist ein Impostor, der das Aussehen eines Spielers scannen kann. Nach einer beliebigen Zeit kann er für 10s dieses Aussehen annehmen.",
	"notes": ""
},
{
    "name": "Camouflager", 
	"team": "impostor", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": "Der Camouflager ist ein Impostor, der einen Tarnungsmodus aktivieren kann. Der Camouflager-Modus dauert 10s und während er aktiv ist, werden alle Spielernamen/Tiere/Hüte versteckt und alle Spieler haben die gleiche Farbe.",
	"notes": ""
},
{
    "name": "Vampire", 
	"team": "impostor", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc":     
        `Der Vampir ist ein Impostor, der andere Spieler beißen kann. Gebissene Spieler sterben nach einer konfigurierbaren Zeitspanne.
        Wenn die Spawn-Chance des Vampirs größer als 0 ist (auch wenn kein Vampir im Spiel ist), können alle Spieler einen Knoblauch platzieren.
        Wenn sich ein Opfer in der Nähe eines Knoblauchs befindet, verwandelt sich der "Biss-Knopf" in den standardmäßigen "Töten-Knopf" und der Vampir kann nur einen normalen Kill ausführen.`,
	"notes": 
        `<ul><li>If a bitten player is still alive when a meeting is being called, they die at the start of the meeting.</li>
        <li>The cooldown is the same as the default kill cooldown (+ the kill delay if the Vampire bites the target).</li>
        <li>If there is a Vampire in the game, there can't be a Warlock.</li></ul>`,
},
{
    "name": "Eraser", 
	"team": "impostor", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": 
        `Der Eraser ist ein Impostor, der die Rolle jedes Spielers löschen kann.
        Die anvisierten Spieler verlieren ihre Rolle nach dem Meeting, kurz bevor ein Spieler verbannt wird.
        Nach jeder Löschung erhöht sich die Abklingzeit um 10 Sekunden.
        Die Löschung wird auch dann durchgeführt, wenn der Eraser oder sein Ziel vor dem nächsten Meeting sterben.`,
	"notes": 
        `<ul><li>The Shifter shift will always be triggered before the Erase (hence either the new role of the Shifter will be erased or the Shifter saves the role of their target, depending on whom the Eraser erased)</li>
        <li>As the erase is being triggered before the ejection of a player, a Jester win would not happen, as the erase will be triggered before.</li>
        <li>Modifier will not be erased.</li></ul>`,
},
{
    "name": "Trickster", 
	"team": "impostor", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": 
        `Der Trickster ist ein Impostor, der 3 Kästchen platzieren kann, die zunächst für die anderen Spieler unsichtbar sind.
        Wenn der Trickster alle seine Kisten platziert hat, werden sie in ein vent-Netzwerk umgewandelt, das nur vom Trickster selbst genutzt werden kann, aber die Kisten sind für die anderen Spieler sichtbar.
        Wenn die Kisten in ein vent-Netz umgewandelt werden, erhält der Trickster die neue Fähigkeit "Licht aus", um die Sichtbarkeit von Nicht-Impostoren einzuschränken, die von anderen Spielern nicht behoben werden kann. Die Lichter werden nach einer Weile automatisch wiederhergestellt.`,
	"notes": ""
},
{
    "name": "Cleaner", 
	"team": "impostor", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": "Der Cleaner ist ein Impostor, der die Fähigkeit hat, Leichen aufzuräumen.",
	"notes": 
        `<ul><li>The Kill and Clean cooldown are shared, preventing them from immediately cleaning their own kills</li>
        <li>If there is a Cleaner in the game, there can't be a Vulture.</li></ul>
    `,
},
{
    "name": "Warlock", 
	"team": "impostor", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": 
        `Der Warlock ist ein Impostor, der einen anderen Spieler verfluchen kann (der verfluchte Spieler wird nicht benachrichtigt).
        Wenn die verfluchte Person neben einem anderen Spieler steht, kann der Warlock diesen Spieler töten (egal, wie weit er entfernt ist).
        Wird ein Kill mit Hilfe eines verfluchten Spielers durchgeführt, wird der Fluch aufgehoben und der Warlock kann sich für eine einstellbare Zeit nicht mehr bewegen.
        Der Warlock kann weiterhin normale Kills ausführen, aber die beiden Tasten haben die gleiche Abklingzeit.`,
    "notes": 
        ``,
},
{
    "name": "Witch", 
	"team": "impostor", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": 
        `Die Witch ist ein Impostor, der die Fähigkeit hat, andere Spieler zu verzaubern.
        Während des nächsten Meetings wird der verzauberte Spieler hervorgehoben und er stirbt direkt nach dem Meeting.
        Ähnlich wie beim Vampir werden Schilde und blanks zweimal überprüft (am Ende des Zaubers auf den Spieler und am Ende des Meetings, wenn der Zauber aktiviert wird).
        Dies kann dazu führen, dass Spieler während des Meetings als verzaubert markiert werden, aber am Ende nicht sterben.
        Stirbt die Witch vor Beginn des Meetings oder wird die Witch während des Meetings erraten, werden die verzauberten Spieler trotzdem hervorgehoben, überleben aber in jedem Fall.`,
	"notes": 
        `<ul><li>The spellbound players will die before the voted player dies (which might trigger e.g. trigger an Impostor win condition, even if the Witch is the one being voted)</li></ul>`,
},
{
    "name": "Bounty Hunter", 
	"team": "impostor", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": 
        `Der Bounty Hunter ist ein Impostor, der laufend Kopfgelder erhält (der anvisierte Spieler wird nicht benachrichtigt).
        Das Ziel des Bounty Hunters wechselt nach jedem Meeting und nach einer konfigurierbaren Zeitspanne.
        Wenn der Bounty Hunter sein Ziel tötet, ist seine Abklingzeit viel kürzer als sonst.
        Das Töten eines Spielers, der nicht das aktuelle Ziel ist, führt zu einer erhöhten Abklingzeit.
        Je nach Option wird ein Pfeil angezeigt, der auf das aktuelle Ziel zeigt.`,
	"notes": 
        ``,
},
{
    "name": "Ninja", 
	"team": "impostor", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": 
        `Der Ninja ist ein Impostor, der die Fähigkeit hat, einen anderen Spieler überall auf der Karte zu töten.
        Du kannst einen Spieler mit deiner Fähigkeit markieren und durch erneutes Benutzen der Fähigkeit an die Position des markierten Spielers springen und ihn töten.
        Abhängig von den Optionen weißt du, wo sich dein markierter Spieler befindet.
        Wenn der Ninja seine Fähigkeit einsetzt, hinterlässt er für eine konfigurierbare Zeitspanne eine Spur (Blätter) an der Stelle, an der er die Fähigkeit aktiviert hat und zusätzlich an der Stelle, an der er den zuvor markierten Spieler getötet hat.
        Wenn der Ninja einen Kill mit seiner Fähigkeit ausführt, kann er für einige Sekunden unsichtbar sein (abhängig von den Optionen)`,
	"notes": 
        `<ul><li>The Ninja has a 5 second cooldown after marking a player</li>
        <li>The trace has a darker (black) or lighter (white) color depending on the players color that will fade into green</li>
        <li>The mark on the marked player will reset after a meeting or after using the ability to kill the marked player. Performing a normal kill will NOT reset the mark</li>
        <li>If the Ninja tries to kill a shielded player (e.g. Medic shield, Shield last game first kill), the kill will not be performed</li>
        <li>If the Ninja tries to kill the Time Master while the shield is active, the Ninja won't teleport to the players position, but the Time Master shield will still be activated</li>
        <li>If the marked target is on a different floor on Submerged, the arrow will always point to the elevator</li></ul>
    `,
},
{
    "name": "Guesser", 
	"team": "impostor", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": 
        `Der Guesser kann ein Crewmate oder ein Impostor sein (je nach Einstellung).
        Der Guesser kann während des Meetings Spieler erschießen, indem er deren Rolle errät. Wenn er falsch rät, stirbt der Guesser stattdessen.
        Die Guesses Impostor und Crewmate sind nur dann richtig, wenn der Spieler dem entsprechenden Team angehört und keine Sonderrolle hat.
        Man kann nur während des Meetings schießen.
        Abhängig von den Optionen kann der Guesser den geshieldeten Spieler nicht erraten und abhängig von den Medic-Optionen kann der Medic/geschützte Spieler benachrichtigt werden (niemand wird sterben, unabhängig davon, was der Guesser erraten hat).`,
	"notes": 
        ``,
},
{
    "name": "Jester", 
	"team": "neutral", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": 
        `Der Jester hat keine Aufgaben. Er gewinnt das Spiel als Solo, wenn er während eines Meetings abgewählt wird.`,
	"notes": 
        ``,
},
{
    "name": "Arsonist", 
	"team": "neutral", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": 
        `Der Arsonist hat keine Aufgaben, er muss das Spiel als Solist gewinnen.
        Der Arsonist kann andere Spieler dousen, indem er die douse-taste drückt und einige Sekunden lang neben dem Spieler bleibt.
        Wenn der Spieler, den der Arsonist doused, aus der Reichweite geht, wird die Abklingzeit auf 0 zurückgesetzt.
        Nachdem er alle Spieler doused hat, kann der Arsonist alle Spieler anzünden, was zu einem Sieg des Arsonists führt.`,
	"notes": 
        ``,
},
{
    "name": "Jackal", 
	"team": "neutral", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": 
        `Der Jackal ist Teil eines Extra-Teams, das versucht, alle anderen Spieler zu eliminieren.
        Der Jackal hat keine Aufgaben und kann Impostors, Crewmates und Neutrale töten.
        Der Jackal kann (wenn es die Optionen erlauben) einen anderen Spieler als seinen Sidekick auswählen.
        Durch das Erschaffen eines Sidekicks werden alle Aufgaben des Sidekicks entfernt und er wird dem Team Jackal hinzugefügt. Der Sidekick verliert seine aktuelle Rolle (außer wenn er ein Lover ist, dann spielt er in zwei Teams).
        Die Aktion "Sidekick erschaffen" kann nur einmal pro Jackal oder einmal pro Spiel verwendet werden (abhängig von den Optionen).
        Der Jackal kann auch Impostors zu seinem Sidekick ernennen, aber je nach den Optionen verwandelt sich der Impostor entweder wirklich in den Sidekick und verlässt das Team Impostors, oder er sieht für den Jackal nur wie der Sidekick aus und bleibt, wie er war.
        Auch wenn ein Spion oder Impostor zum Sidekick wird, erscheint er für die Impostors immer noch rot.
        <br><br>
        Das Team Jackal ermöglicht mehrere neue Spielausgänge, von denen hier einige Beispiele aufgeführt sind:
        <ul><li>Die Impostors könnten eliminiert werden und dann spielt die Crew gegen das Team Jackal.</li>
        <li>Die Crew könnte eliminiert werden, dann kämpft das Team Jackal gegen die Impostors (Die Crew kann in diesem Szenario immer noch einen Aufgabensieg erzielen)</li></ul>
        <br><br>
        Die Priorität der Siegbedingungen ist die folgende:
        <ol><li>Crewmate Mini verliert durch Abstimmung</li>    
        <li>Jester gewinnt durch Abstimmung</li>    
        <li>Arsonist gewinnt</li>    
        <li>Team Impostor gewinnt durch Sabotage</li>    
        <li>Team Crew gewinnt durch Aufgaben (auch möglich, wenn die gesamte Crew tot ist)</li>
        <li>Die Liebenden unter den letzten drei Spielern gewinnen</li>
        <li>Team Jackal gewinnt durch Überzahl (wenn das Team Jackal die gleiche oder eine größere Anzahl von Spielern hat als die Crew und 0 Impostoren übrig sind und Team Jackal keinen Lover hat)</li>
        <li>Team Impostor gewinnt durch Überzahl (Wenn das Team Impostor gleich viele oder mehr Spieler hat als die Mannschaft und 0 Spieler des Teams Jackal übrig sind und das Team Impostor keinen Lover hat)</li>    
        <li>Team Crew gewinnt durch Überzahl (wenn kein Spieler des Teams Jackal und des Teams Impostors übrig ist)</li></ol>    
    `,
	"notes": 
        ``,
},
{
    "name": "Sidekick", 
	"team": "neutral", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": 
        `Wird einem Spieler während des Spiels durch die "Erschaffe Sidekick-Aktion" des Jackals zugewiesen und schließt sich dem Jackal in seinem Bestreben an, alle anderen Spieler zu eliminieren.
        Nach dem Tod des Jackals (abhängig von den Optionen) kann er selbst zum Jackal befördert werden und möglicherweise sogar einen eigenen Sidekick zuweisen.`,
	"notes": 
        `<ul><li>A player that converts into a Sidekick loses their previous role and tasks (if they had one).</li>    
        <li>The Sidekick may be killed by a Sheriff.</li>    
        <li>The Sidekick cannot target the Mini, while it's growing up.</li></ul>
    `,
},
{
    "name": "Vulture", 
	"team": "neutral", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": 
        `Der Vulture hat keine Aufgaben, er muss das Spiel im Alleingang gewinnen.
        Der Vulture ist eine neutrale Rolle, die eine bestimmte Anzahl von Leichen fressen muss (abhängig von den Optionen), um zu gewinnen.        
        Wenn ein Spieler stirbt, erhält der Vulture je nach Option einen Pfeil, der auf die Leiche zeigt.        
        Wenn es einen Vulture im Spiel gibt, kann es keinen Cleaner geben.`,
	"notes": 
        ``,
},
{
    "name": "Lawyer", 
	"team": "neutral", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": 
        `Der Lawyer ist eine neutrale Rolle, die einen Mandanten hat.
        Der Mandant kann ein Impostor oder Jackal sein, der kein Lover ist.        
        Abhängig von den Optionen kann der Mandant auch ein Jester sein.        
        Der Lawyer braucht den Sieg seines Mandanten, um das Spiel zu gewinnen.        
        Ihr Mandant weiß nicht, dass er ihr Mandant ist.        
        Wenn dein Mandant rausgevoted wird, stirbt der Lawyer mit seinem Mandanten.        
        Wenn der Mandant stirbt, wechselt der Lawyer seine Rolle und wird zum Pursuer, der ein anderes Ziel hat, nämlich das Spiel zu gewinnen.
        <br><br>
        Wie der Lawyer gewinnt:
        <ul><li>Lawyer tot/lebendig, Mandant lebendig und Mandant gewinnt: Der Lawyer gewinnt zusammen mit dem Team des Mandanten.</li>
        <li>Wenn ihr Mandant Jester ist und der Jester abgewählt wird, gewinnt der Lawyer zusammen mit dem Jester.</li></ul>
    `,
	"notes": 
        `<ul><li>If the client disconnects, the Lawyer will also turn into the Pursuer.</li>    
        <li>The Lawyer needs to figure out the role of their client depending on the options.</li>    
        <li>The tasks only count, if the Lawyer gets promoted to Pursuer.</li>    
        <li>If the Lawyer dies before their client, they will lose all their tasks and will get the overview immediately.</li></ul>
    `,
},
{
    "name": "Prosecutor", 
	"team": "neutral", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": 
        `Der Prosecutor ist eine neutrale Rolle, die dem Lawyer ähnelt. Der Prosecutor hat einen Mandanten, der ein Crewmitglied ist.
        Der Prosecutor ist darauf angewiesen, dass sein Mandant rausgeworfen wird, um das Spiel zu gewinnen.        
        Der Mandant des Prosecutors weiß nicht, dass er sein Mandant ist.        
        Wenn der Mandant zum Sidekick wird, wechselt der Prosecutor seine Rolle und wird zum Lawyer des Mandanten und muss den Mandant von nun an schützen.        
        Wenn der Mandant des Prosecutors stirbt, ändert der Prosecutor seine Rolle und wird zum Pursuer, der ein anderes Ziel hat, um das Spiel zu gewinnen.`,
	"notes": 
        `<ul><li>The Prosecutor's role settings are shared with the Lawyer settings.</li>    
        <li>If the client disconnects, the Prosecutor will also turn into the Pursuer.</li>    
        <li>The Prosecutor needs to figure out the role of their client depending on the options.</li>    
        <li>The tasks only count, if the Prosecutor gets promoted to Pursuer.</li>    
        <li>If the Prosecutor dies before their client, they will lose all their tasks and will get the overview immediately.</li></ul>
    `,
},
{
    "name": "Pursuer", 
	"team": "neutral", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": 
        `Der Pursuer ist immer noch eine neutrale Rolle, hat aber ein anderes Ziel, um das Spiel zu gewinnen; er muss noch am Leben sein, wenn das Spiel endet und die Crew gewinnt.
        Um dieses Ziel zu erreichen, verfügt der Pursuer über eine Fähigkeit namens "Blank", mit der er die Waffe eines Killers (dazu gehört auch der Sheriff) mit einer Platzpatrone füllen kann. Wenn der Killer also versucht, jemanden zu töten, verfehlt er sein Ziel, und seine Abklingzeiten werden wie üblich ausgelöst.
        Wenn der Killer die "Blank"-Waffe abfeuert, werden Schilde (z.B. Medic-Schild oder Time Master-Schild) nicht ausgelöst.
        Der Pursuer hat Aufgaben (die bereits als Lawyer/Prosecutor erledigt werden können), die für den Aufgabensieg der Crewmates zählen. Wenn der Pursuer stirbt, werden seine Aufgaben nicht mehr gezählt.`,
	"notes": 
        ``,
},
{
    "name": "Thief", 
	"team": "neutral", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": 
        `Der Thief muss einen anderen Killer töten (Impostor, Jackal/Sidekick und falls aktiviert Sheriff) um eine Siegbedingung zu haben.        
        Wenn der Thief keinen anderen Killer tötet, verliert er das Spiel.        
        Wenn der Thief einen der anderen Killer tötet, übernimmt der Dieb deren Rolle (z. B. Ninja) und schließt sich deren Team an (in diesem Fall Team Impostor). 
        Er hat dann die Siegbedingung der neuen Rolle (z. B. Impostor-Sieg).        
        Wenn der Dieb versucht, eine nicht-tötende Rolle (Crewmate oder Neutral) zu töten, stirbt er ähnlich wie ein fehlgeleiteter Sheriff.`,
	"notes": 
        ``,
},
{
    "name": "Mayor", 
	"team": "crewmate", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": 
        `Der Mayor führt die Crewmates an, indem er eine Stimme hat, die doppelt zählt.
        Der Mayor kann sein Meeting immer nutzen, auch wenn die maximale Anzahl an Meetings erreicht wurde.        
        Der Mayor hat einen tragbaren Meeting-Button, abhängig von den Optionen.        
        Der Mayor kann die Farben der Abstimmung sehen, nachdem er eine konfigurierbare Anzahl von Aufgaben erledigt hat, abhängig von den Optionen.`,
	"notes": 
        ``,
},
{
    "name": "Engineer", 
	"team": "crewmate", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": 
        `Der Engineer (wenn er noch lebt) kann eine bestimmte Anzahl von Sabotagen pro Spiel von einem beliebigen Punkt der Karte aus beheben.
        Der Engineer kann Vents benutzen.        
        Wenn sich der Engineer in einem vent befindet, sehen die Mitglieder des Teams Jackal/Impostors je nach Option einen blauen Umriss um alle vents auf der Karte (um sie zu warnen).        
        Wegen der Vents kann der Engineer einige Aufgaben nicht über die Schaltfläche "Use" starten, sondern nur durch Doppelklick.`,
	"notes": 
        `<ul><li>The kill button of Impostors activates if they stand next to a vent where the Engineer is. They can also kill them there. No other action (e.g. Morphling sample, Shifter shift, ...) can affect players inside vents.</li></ul>`,
},
{
    "name": "Sheriff", 
	"team": "crewmate", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": 
        `Der Sheriff hat die Fähigkeit, Impostoren oder neutrale Rollen zu töten, wenn er sie aktiviert hat.
        Wenn er versucht, einen Crewmate zu töten, stirbt dieser stattdessen.`,
	"notes": 
        `<ul><li>If the Sheriff shoots the person the Medic shielded, the Sheriff and the shielded person both remain unharmed.</li>
        <li>If the Sheriff shoots a Mini Impostor while growing up, nothing happens. If it's fully grown, the Mini Impostor dies.</li></ul>`,
},
{
    "name": "Deputy", 
	"team": "crewmate", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": 
        `Der Deputy hat die Fähigkeit, dem Spieler Handschellen anzulegen.
        Die Handschellen bleiben solange verborgen, bis der Spieler, dem die Handschellen angelegt wurden, versucht, eine deaktivierte Taste/Hotkey zu betätigen.
        <br><br>
        Handschellen deaktivieren:
        <ul><li>Töten</li>    
        <li>Fähigkeiten</li>    
        <li>Vent</li>    
        <li>Reports</li></ul>
    `,
	"notes": 
        `<ul><li>Duration starts after the handcuffs become visible.</li>    
        <li>Deputy can not be in game without Sheriff</li></ul>
    `,
},
{
    "name": "Lighter", 
	"team": "crewmate", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": 
        `Der Lighter kann von Zeit zu Zeit sein Feuerzeug einschalten, was seine Sicht um einen einstellbaren Wert erhöht.`,
	"notes": 
        ``,
},
{
    "name": "Detective", 
	"team": "crewmate", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": 
        `Der Detective kann Fußabdrücke sehen, die andere Spieler hinterlassen.
        Die andere Funktion des Detektivs zeigt sich, wenn er eine Leiche meldet: Er erhält Hinweise auf die Identität des Mörders. Die Art der Informationen, die sie erhalten, hängt von der Zeit ab, die du gebraucht hast, um die Leiche zu finden.`,
	"notes": 
        `<ul><li>When people change their colors (because of a morph or camouflage), all the footprints also change their colors (also the ones that were already on the ground). If the effects are over, all footprints switch back to the original color.</li>
        <li>The Detective does not see footprints of players that sit in vents</li></ul>
    `,
},
{
    "name": "Time Master", 
	"team": "crewmate", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": 
        `Der Time Master verfügt über einen Time Shield, den er aktivieren kann. Der time shield bleibt für eine konfigurierbare Zeitspanne aktiv
        Wenn ein Spieler versucht, den Time Master zu töten, während der Time Shield aktiv ist, wird er nicht getötet und die Zeit wird für eine bestimmte Zeit zurückgespult.
        Die Abklingzeit des Killers wird nicht zurückgesetzt, so dass der Time Master sicherstellen muss, dass das Spiel nicht in der gleichen Situation endet.        
        Der Time Master ist vom rewind nicht betroffen`,
	"notes": 
        `<ul><li>Only the movement is affected by the rewind.</li>    
        </li>A Vampire bite will trigger the rewind. If the Time Master misses shielding the bite, they can still shield the kill which happens a few seconds later.</li>    
        <li>If the Time Master was bitten and has their shield active before when a meeting is called, they survive but the time won't be rewound.</li>    
        <li>If the Time Master has a Medic shield, they won't rewind.</li>    
        <li>The shield itself ends immediately when triggered. So the Time Master can be attacked again as soon as the rewind ends.</li></ul>
    `,
},
{
    "name": "Medic", 
	"team": "crewmate", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": 
        `Der Medic kann einen Spieler pro Spiel mit einem shield versehen (durch einen Umriss um den Spieler hervorgehoben), wodurch der Spieler nicht mehr getötet werden kann.
        Der abgeschirmte Spieler kann immer noch abgewählt werden und könnte auch ein Impostor sein.        
        Wenn in den Optionen eingestellt, bekommt der geschützte Spieler und/oder der Medic einen roten Blitz auf dem Bildschirm, wenn jemand (Impostor, Sheriff, ...) versucht, ihn zu ermorden.        
        Wenn der Medic stirbt, verschwindet der shield mit ihm.        
        Der Sheriff stirbt nicht, wenn er versucht, ein Crewmitglied mit Schild zu töten, und führt keinen Kill aus, wenn er versucht, einen Impostor mit Schild zu töten.        
        Abhängig von den Optionen werden Vermutungen des Guessers durch den shield blockiert und der abgeschirmte Spieler/Medic kann benachrichtigt werden.        
        Eine weitere Funktion des Medic zeigt an, wenn er eine Leiche meldet: Er sieht, wie lange es her ist, dass der Spieler gestorben ist.`,
	"notes": 
        `<ul><li>If the shielded player is a Lover and the other Lover dies, they nevertheless kill themselves.</li>    
        <li>If the Shifter has a shield or their target has a Shield, the shielded player switches.</li>    
        <li>Shields set after the next meeting, will be set before a possible shift is being performed.</li>
    `,
},
{
    "name": "Swapper", 
	"team": "crewmate", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": 
        `Bei Meetings kann der Swapper die Stimmen tauschen, die zwei Personen erhalten (d.h. alle Stimmen die Spieler A erhalten hat, werden an Spieler B weitergegeben und umgekehrt).
        Aufgrund der Stärke des Swappers in Meetings kann er keine Notfall-Meetings starten und keine Lichter und Kommunikationen reparieren.        
        Der Swapper hat jetzt anfängliche Swap-Ladungen und kann diese Ladungen wieder aufladen, nachdem er eine konfigurierbare Anzahl von Aufgaben erledigt hat.`,
	"notes": 
        `<ul><li>The remaining charges will be displayed in brackets next to the players role while not in a meeting</li>
        <li>In a meeting the charges will appear next to the Confirm Swap button</li></ul>
    `,
},
{
    "name": "Seer", 
	"team": "crewmate", 
	"desc": "Gruppe von 3 Impostors", 
	"longDesc": 
        `Der Seer hat zwei Fähigkeiten (man kann eine davon oder beide in den Optionen aktivieren).
        Der Seer sieht die Seelen von Spielern, die eine Runde zuvor gestorben sind, die Seelen verblassen langsam.        
        Der Seer bekommt einen blauen Blitz auf seinem Bildschirm, wenn ein Spieler irgendwo auf der Karte stirbt.`,
	"notes": 
        ``,
},






];

$('#txt-search').keyup(function(){
            let searchField = $(this).val();
			if(searchField === '')  {
				$('#filter-records').html('');
				return;
			}
			let output = "";
            try {
                data.filter(role => {
                    return (role.name.toLowerCase().startsWith(searchField.toLowerCase()));
                }).forEach(foundRole => {
                    output += '<div class="container">';
                      output += '<hgroup><h2 class='+foundRole.team+'>' + foundRole.name + '</h2>';
                      output += '<h3>' + foundRole.desc + '</h3></hgroup>'
                      output += '<p>' + foundRole.longDesc + '</p>'
                      output += foundRole.notes
                      output += '</div>';
                      throw 'Break';
                })
                data.filter(role => {
                    return (role.name.toLowerCase().includes(searchField.toLowerCase()))
                }).forEach(foundRole => {
                    output += '<div class="container">';
                      output += '<hgroup><h2 class='+foundRole.team+'>' + foundRole.name + '</h2>';
                      output += '<h3>' + foundRole.desc + '</h3></hgroup>'
                      output += '<p>' + foundRole.longDesc + '</p>'
                      output += foundRole.notes
                      output += '</div>';
                      throw 'Break';
                })
            }catch (e) {
				if (e !== 'Break') throw e;
			}
            
            output += '</div>';
			$('#filter-records').html(output);
        });
  });