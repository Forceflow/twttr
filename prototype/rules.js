// This is a rule object
function Rule(name, pattern, replace){
	this.name = name;
	this.pattern = pattern;
	this.replace = replace;
}

// Define rules here
var rules = [];

// Notes: we use groups () to preserve case for first character, as well as \\b for word boundaries

// todo: meer samentrekkingen (ik heb -> kheb, kmoet, kzal)
// todo: get funky met leestekens (whitespace achter komma of dubbelpunt wegdoen, ...)
// todo: regels om getallen te vervangen

// Algemeen aanvaard, zie https://nl.wikipedia.org/wiki/Lijst_van_afkortingen_in_het_Nederlands
rules.push(new Rule("In combinatie met -> Icm", new RegExp('\\b(i)n\\scombinatie\\smet\\b', 'ig'), "$1cm"));
rules.push(new Rule("In functie van -> Ifv", new RegExp('\\b(i)n\\sfunctie\\svan\\b', 'ig'), "$1fv"));
rules.push(new Rule("In plaats van -> Ipv", new RegExp('\\b(i)n\\splaats\\svan\\b', 'ig'), "$1pv"));
rules.push(new Rule("Met behulp van -> Mbv", new RegExp('\\b(m)et\\sbehulp\\svan\\b', 'ig'), "$1bv"));
rules.push(new Rule("In vergelijking met -> Ivm", new RegExp('\\b(i)n\\s(v)ergelijking\\s(m)et\\b', 'ig'), "$1$2$3"));
rules.push(new Rule("In verband met -> Ivm", new RegExp('\\b(i)n\\s(v)erband\\s(m)et\\b', 'ig'), "$1$2$3"));
rules.push(new Rule("Door middel van -> Dmv", new RegExp('\\b(d)oor\\smiddel\\svan\\b', 'ig'), "$1mv"));
rules.push(new Rule("Naar aanleiding van -> Dmv", new RegExp('\\b(n)aar\\saanleiding\\svan\\b', 'ig'), "$1av"));
rules.push(new Rule("Aan de hand van -> Adhv", new RegExp('\\b(a)an\\s(d)e\\s(h)and\\s(v)an\\b', 'ig'), "$1$2$3$4"));
rules.push(new Rule("Met andere woorden -> Maw", new RegExp('\\b(m)et\\sandere\\swoorden\\b', 'ig'), "$1aw"));
rules.push(new Rule("En andere -> Ea", new RegExp('\\b(e)n\\sandere\\b', 'ig'), "$1a"));
rules.push(new Rule("En dergelijke -> Ed", new RegExp('\\b(e)n\\sdergelijke\\b', 'ig'), "$1d"));
rules.push(new Rule("In tegenstelling tot -> Itt", new RegExp('\\b(i)n\\stegenstelling\\stot\\b', 'ig'), "$1tt"));
rules.push(new Rule("Met betrekking tot -> Mbt", new RegExp('\\b(m)et\\sbetrekking\\stot\\b', 'ig'), "$1bt"));
rules.push(new Rule("Ten aanzien van -> Tav", new RegExp('\\b(t)en\\saanzien\\svan\\b', 'ig'), "$1av"));
rules.push(new Rule("Ter hoogte van -> Thv", new RegExp('\\b(t)er\\shoogte\\svan\\b', 'ig'), "$1hv"));
rules.push(new Rule("Niet van toepassing -> Mbt", new RegExp('\\b(n)iet\\svan\\stoepassing\\b', 'ig'), "$1vt"));
rules.push(new Rule("Van links naar rechts -> Vlnr", new RegExp('\\b(v)an\\slinks\\snaar\\srechts\\b', 'ig'), "$1lnr"));
rules.push(new Rule("Tot en met -> Tem", new RegExp('\\b(t)ot\\sen\\smet\\b', 'ig'), "$1em"));
rules.push(new Rule("Maximum -> Max", new RegExp('\\b(m)aximum\\b', 'ig'), "$1ax"));
rules.push(new Rule("Minimum -> Min", new RegExp('\\b(m)inimum\\b', 'ig'), "$1in"));
rules.push(new Rule("Exclusief -> Excl", new RegExp('\\b(e)xclusief\\b', 'ig'), "$1xcl"));
rules.push(new Rule("Inclusief -> Incl", new RegExp('\\b(i)nclusief\\b', 'ig'), "$1ncl"));
rules.push(new Rule("Enzovoort -> Enz", new RegExp('\\b(e)nzovoort\\b', 'ig'), "$1nz"));
rules.push(new Rule("Onder andere -> Oa", new RegExp('\\b(o)nder\\sandere\\b', 'ig'), "$1a"));
rules.push(new Rule("Onder invloed van -> Oiv", new RegExp('\\b(o)nder\\sinvloed\\svan\\b', 'ig'), "$1iv"));
rules.push(new Rule("Onder leiding van -> Olv", new RegExp('\\b(o)nder\\sleiding\\svan\\b', 'ig'), "$1lv"));
rules.push(new Rule("Als het ware -> Ahw", new RegExp('\\b(a)ls\\shet\\sware\\b', 'ig'), "$1hw"));
rules.push(new Rule("Onder meer -> Om", new RegExp('\\b(o)nder\\smeer\\b', 'ig'), "$1m"));
rules.push(new Rule("President -> Pres", new RegExp('\\b(p)resident\\b', 'ig'), "$1res"));
rules.push(new Rule("Professor -> Prof", new RegExp('\\b(p)rofessor\\b', 'ig'), "$1rof"));
rules.push(new Rule("De Heer -> Dhr", new RegExp('\\b(d)e\\sheer\\b', 'ig'), "$1hr"));
rules.push(new Rule("Mevrouw -> Mevr", new RegExp('\\b(m)evrouw\\b', 'ig'), "$1evr"));
rules.push(new Rule("Organisatie -> Org", new RegExp('\\b(o)rganisatie\\b', 'ig'), "$1rg"));
rules.push(new Rule("Internationaal -> Intl", new RegExp('\\b(i)nternationaal\\b', 'ig'), "$1ntl"));
rules.push(new Rule("Provincie -> Prov", new RegExp('\\b(p)rovincie\\b', 'ig'), "$1rov"));
rules.push(new Rule("Redactie -> Red", new RegExp('\\b(r)edactie\\b', 'ig'), "$1ed"));
rules.push(new Rule("Telefoon -> Tel", new RegExp('\\b(t)elefoon\\b', 'ig'), "$1el"));
rules.push(new Rule("Televisie -> Tv", new RegExp('\\b(t)elevisie\\b', 'ig'), "$1v"));
rules.push(new Rule("Junior -> Jr", new RegExp('\\b(j)unior\\b', 'ig'), "$1r"));
rules.push(new Rule("Laboratorium -> Lab", new RegExp('\\b(d)e\\sheer\\b', 'ig'), "$1hr"));

// Scientific units
//Time
rules.push(new Rule("Uur -> u", new RegExp('\\buur\\b', 'ig'), "u"));
rules.push(new Rule("Minuut -> m", new RegExp('\\bminuut\\b', 'ig'), "min"));
rules.push(new Rule("Minuten -> m", new RegExp('\\bminuten\\b', 'ig'), "min"));
rules.push(new Rule("Seconde -> s", new RegExp('\\bseconde\\b', 'ig'), "sec"));
rules.push(new Rule("Seconden -> s", new RegExp('\\bseconden\\b', 'ig'), "sec"));
rules.push(new Rule("Milliseconde -> s", new RegExp('\\bmilliseconde\\b', 'ig'), "ms"));
rules.push(new Rule("Milliseconden -> s", new RegExp('\\bmilliseconden\\b', 'ig'), "ms"));
//Distance
rules.push(new Rule("Meter -> m", new RegExp('\\bmeter\\b', 'ig'), "m"));
rules.push(new Rule("Kilometer -> Km", new RegExp('(k)ilometer', 'ig'), "$1m"));
rules.push(new Rule("Decimeter -> Dm", new RegExp('(d)ecimeter', 'ig'), "$1m"));
rules.push(new Rule("Centimeter -> Cm", new RegExp('(c)entimeter', 'ig'), "$1m"));
rules.push(new Rule("Millimeter -> Mm", new RegExp('(m)illimeter', 'ig'), "$1m"));
// Volume
rules.push(new Rule("Liter -> l", new RegExp('\\bliter\\b', 'ig'), "l"));
rules.push(new Rule("Deciliter -> Dl", new RegExp('(d)eciliter', 'ig'), "$1l"));
rules.push(new Rule("Centiliter -> Cl", new RegExp('(c)entiliter', 'ig'), "$1l"));
rules.push(new Rule("Milliliter-> Cl", new RegExp('(m)illiliter', 'ig'), "$1l"));
// Mass
rules.push(new Rule("Gram -> gr", new RegExp('\\bgram\\b', 'ig'), "gr"));
rules.push(new Rule("Kilogram -> Kg", new RegExp('(k)ilogram', 'ig'), "$1g"));
rules.push(new Rule("Milligram-> Cl", new RegExp('(m)illigram', 'ig'), "$1g"));
// Digital sizes
rules.push(new Rule("Gigabit -> Gb", new RegExp('gigabit', 'ig'), "Gb"));
rules.push(new Rule("Gigabyte -> GB", new RegExp('gigabyte', 'ig'), "GB"));
rules.push(new Rule("Megabit -> Mb", new RegExp('megabit', 'ig'), "Mb"));
rules.push(new Rule("Megabyte -> MB", new RegExp('megabyte', 'ig'), "MB"));
rules.push(new Rule("Kilobit -> Kb", new RegExp('kilobit', 'ig'), "kb"));
rules.push(new Rule("Kilobyte -> KB", new RegExp('kilobyte', 'ig'), "KB"));
rules.push(new Rule("Decibel -> dB", new RegExp('decibel', 'ig'), "dB"));
// Monetary value
// rules.push(new Rule("Euro -> €", new RegExp('\\beuro\\b', 'ig'), "€"));
rules.push(new Rule("Dollar -> $", new RegExp('\\bdollar\\b', 'ig'), "$"));

// numbers
rules.push(new Rule("Twee -> 2", new RegExp('\\btwee\\b', 'ig'), "2"));
rules.push(new Rule("Tweede -> 2de", new RegExp('\\btweede\\b', 'ig'), "2e"));
rules.push(new Rule("Drie -> 3", new RegExp('\\bdrie\\b', 'ig'), "3"));
rules.push(new Rule("Derde -> 3de", new RegExp('\\bderde\\b', 'ig'), "3e"));
rules.push(new Rule("Vier -> 4", new RegExp('\\bvier\\b', 'ig'), "4"));
rules.push(new Rule("Vijf -> 5", new RegExp('\\btwee\\b', 'ig'), "5"));
rules.push(new Rule("Zes -> 6", new RegExp('\\btwee\\b', 'ig'), "6"));
rules.push(new Rule("Zeven -> 7", new RegExp('\\bzeven\\b', 'ig'), "7"));
rules.push(new Rule("Acht -> 8", new RegExp('\\bacht\\b', 'ig'), "8"));
rules.push(new Rule("Negen -> 9", new RegExp('\\bnegen\\b', 'ig'), "9"));
rules.push(new Rule("Tien -> 10", new RegExp('\\btien\\b', 'ig'), "10"));

// Less common
rules.push(new Rule("Misschien -> Mss", new RegExp('\\b(m)isschien\\b', 'ig'), "$1ss"));
rules.push(new Rule("Inderdaad -> Idd", new RegExp('\\b(i)nderdaad\\b', 'ig'), "$1dd"));
rules.push(new Rule("Namelijk -> Nl", new RegExp('\\b(n)amelijk\\b', 'ig'), "$1l"));
rules.push(new Rule("Voornamelijk -> Vnl", new RegExp('\\b(v)oornamelijk\\b', 'ig'), "$1nl"));
rules.push(new Rule("Bijvoorbeeld -> Bv", new RegExp('\\b(b)ijvoorbeeld\\b', 'ig'), "$1v"));
rules.push(new Rule("Waarschijnlijk -> Waarsch", new RegExp('\\b(w)aarschijnlijk\\b', 'ig'), "$1aarsch"));
rules.push(new Rule("Waarom -> Wrm", new RegExp('\\b(w)aarom\\b', 'ig'), "$1rm"));
rules.push(new Rule("Eventueel -> Evt", new RegExp('\\b(e)ventueel\\b', 'ig'), "$1vt"));
rules.push(new Rule("Gemiddeld -> Gem", new RegExp('\\b(g)emiddeld\\b', 'ig'), "$1em"));
rules.push(new Rule("Algemeen -> Alg", new RegExp('\\b(a)lgemeen\\b', 'ig'), "$1lg"));
rules.push(new Rule("Artikel -> Art", new RegExp('\\b(a)rtikel\\b', 'ig'), "$1rt"));
rules.push(new Rule("Pagina -> Pag", new RegExp('\\b(p)agina\\b', 'ig'), "$1ag"));
rules.push(new Rule("Paragraaf -> Par", new RegExp('\\b(p)aragraaf\\b', 'ig'), "$1ar"));
rules.push(new Rule("Circa -> Ca", new RegExp('\\b(c)irca\\b', 'ig'), "$1a"));
rules.push(new Rule("Ongeveer -> Ong", new RegExp('\\b(o)ngeveer\\b', 'ig'), "$1ng"));
rules.push(new Rule("Uitsluitend -> Uitsl", new RegExp('\\b(u)itsluitend\\b', 'ig'), "$1itsl"));
rules.push(new Rule("Uitzonderlijk -> Uitzl", new RegExp('\\b(u)itzonderlijk\\b', 'ig'), "$1itzl"));
rules.push(new Rule("Nummer -> Nr", new RegExp('\\b(n)ummer\\b', 'ig'), "$1r"));
rules.push(new Rule("Nummers -> Nrs", new RegExp('\\b(n)ummers\\b', 'ig'), "$1rs"));
rules.push(new Rule("Of course -> Ofc", new RegExp('\\b(o)f\\scourse\\b', 'ig'), "$1fc"));
rules.push(new Rule("Oh My God -> Omg", new RegExp('\\b(o)h\\smy\\sgod\\b', 'ig'), "$1mg"));
rules.push(new Rule("Thanks -> Thx", new RegExp('\\b(t)hanks\\b', 'ig'), "$1hx"));
rules.push(new Rule("By the way -> Btw", new RegExp('\\b(b)y\\sthe\\sway\\b', 'ig'), "$1tw"));
rules.push(new Rule("Retweet -> RT", new RegExp('\\bretweet\\b', 'ig'), "RT"));
rules.push(new Rule("Facebook -> Fb", new RegExp('\\b(f)acebook\\b', 'ig'), "$1b"));
rules.push(new Rule("Gewoon -> Gwn", new RegExp('\\b(g)ewoon\\b', 'ig'), "$1wn"));
rules.push(new Rule("Avatar -> Ava", new RegExp('\\b(a)vatar\\b', 'ig'), "$1va"));
rules.push(new Rule("Website -> Site", new RegExp('\\bwebsite\\b', 'ig'), "site"));

rules.push(new Rule("Vanavond -> Vnvd", new RegExp('\\b(v)anavond\\b', 'ig'), "$1nvd"));
rules.push(new Rule("Vandaag -> Vdaag", new RegExp('\\b(v)andaag\\b', 'ig'), "$1daag"));
rules.push(new Rule("Morgen -> Mrgn", new RegExp('\\b(m)orgen\\b', 'ig'), "$1rgn"));
rules.push(new Rule("Week -> Wk", new RegExp('\\b(w)eek\\b', 'ig'), "$1k"));
rules.push(new Rule("Maand -> Mnd", new RegExp('\\b(m)aand\\b', 'ig'), "$1nd"));
rules.push(new Rule("Jaar -> Jr", new RegExp('\\b(j)aar\\b', 'ig'), "$1r"));
rules.push(new Rule("Even -> ff", new RegExp('\\beven\\b', 'ig'), "ff"));
rules.push(new Rule("Niet meer -> Nt mr", new RegExp('\\b(n)iet\\smeer\\b', 'ig'), "$1t mr"));
rules.push(new Rule("één -> 1", new RegExp('\\béén\\b', 'ig'), "1"));
rules.push(new Rule("Sowieso -> Sws", new RegExp('\\b(s)owieso\\b', 'ig'), "$1ws"));
rules.push(new Rule("Serieus -> Srs", new RegExp('\\b(s)erieus\\b', 'ig'), "$1rs"));
rules.push(new Rule("Straks -> Strax", new RegExp('\\b(s)traks\\b', 'ig'), "$1trax"));
rules.push(new Rule("Wanneer -> Wnr", new RegExp('\\b(w)anneer\\b', 'ig'), "$1nr"));
rules.push(new Rule("Door -> Dr", new RegExp('\\b(d)oor\\b', 'ig'), "$1r"));
rules.push(new Rule("Naar -> Nr", new RegExp('\\b(n)aar\\b', 'ig'), "$1r"));
rules.push(new Rule("Nog -> Ng", new RegExp('\\b(n)og\\b', 'ig'), "$1g"));
rules.push(new Rule("Eens -> ns", new RegExp('\\beens\\b', 'ig'), "ns"));
rules.push(new Rule("Met -> Mt", new RegExp('\\b(m)et\\b', 'ig'), "$1t"));
rules.push(new Rule("Geen -> Gn", new RegExp('\\b(g)een\\b', 'ig'), "$1n"));
rules.push(new Rule("Aan het -> Ah", new RegExp('\\b(a)an\\shet\\b', 'ig'), "$1h"));
rules.push(new Rule("Dat is -> Das", new RegExp('\\b(d)at\\sis\\b', 'ig'), "$1as"));
rules.push(new Rule("Van de -> Vd", new RegExp('\\b(v)an\\s(d)e\\b', 'ig'), "$1$2"));
rules.push(new Rule("Op de -> Od", new RegExp('\\b(o)p\\sde\\b', 'ig'), "$1d"));
rules.push(new Rule("Aan de -> Ad", new RegExp('\\b(a)an\\sde\\b', 'ig'), "$1d"));
rules.push(new Rule("In de -> Id", new RegExp('\\b(i)n\\sde\\b', 'ig'), "$1d"));
rules.push(new Rule("Op het -> Op't", new RegExp('\\b(o)p\\shet\\b', 'ig'), "$1p't"));
rules.push(new Rule("Het begint -> 't begint", new RegExp('\\bhet\\s(b)egint\\b', 'ig'), "'t $1egint"));
rules.push(new Rule("Is het -> Ist", new RegExp('\\b(i)s\\shet\\b', 'ig'), "$1st"));

// Definitely SMS taal
rules.push(new Rule("Wacht -> w8", new RegExp('\\bwacht\\b', 'ig'), "w8"));
rules.push(new Rule("Dacht -> d8", new RegExp('\\bdacht\\b', 'ig'), "d8"));
rules.push(new Rule("Succes -> suc6", new RegExp('\\bsucces\\b', 'ig'), "suc6"));

// Overlap
rules.push(new Rule("Niet -> Nt", new RegExp('\\b(n)iet\\b', 'ig'), "$1t"));
rules.push(new Rule("Mijn -> Mn", new RegExp('\\b(m)ijn\\b', 'ig'), "$1n"));
rules.push(new Rule("Zijn -> Zn", new RegExp('\\b(z)ijn\\b', 'ig'), "$1n"));