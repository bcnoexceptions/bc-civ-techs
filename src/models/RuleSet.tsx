import { ColorDiscount } from "./ColorDiscount";
import { NamedDiscount } from "./NamedDiscount";
import { Color, Tech } from "./Tech";

export enum RuleSet {
    AdvancedCiv,
    MegaCiv,
}

export const MIN_DISCOUNT = 5;

/**
 * Load the available techs for "Advanced Civ"
 *
 * @export
 * @returns {Tech[]}
 */
export function loadAdvanceCivTechs(): Tech[] {
    return [
        new Tech(
            "Pottery",
            Color.Orange,
            "With Grain, reduces the effects of Famine.",
            "During Famine, you may reveal any number of Grain cards (and not spend them this turn). Prevent loss of 4 unit points per Grain revealed.",
            45,
            [
                new ColorDiscount(10, Color.Orange),
                new NamedDiscount(10, "Democracy"),
                new NamedDiscount(10, "Monotheism"),
            ]
        ),
        new Tech(
            "Cloth Making",
            Color.Orange,
            "Ships allowed an extra move.",
            "Your ships may move five spaces.",
            45,
            [
                new ColorDiscount(10, Color.Orange),
                new NamedDiscount(10, "Democracy"),
                new NamedDiscount(10, "Monotheism"),
            ]
        ),
        new Tech(
            "Metalworking",
            Color.Orange,
            "Gives an advantage in battle.",
            "During combat, players without Metalworking lose casualties before players with Metalworking.",
            80,
            [
                new ColorDiscount(10, Color.Orange),
                new NamedDiscount(10, "Democracy"),
                new NamedDiscount(10, "Monotheism"),
                new NamedDiscount(20, "Military"),
            ]
        ),
        new Tech(
            "Agriculture",
            Color.Orange,
            "Permits an increase in population.",
            "The population limit of areas is increased by 1 as long as they do not contain any other players.",
            110,
            [
                new ColorDiscount(10, Color.Orange),
                new NamedDiscount(10, "Democracy"),
                new NamedDiscount(10, "Monotheism"),
            ]
        ),
        new Tech(
            "Road Building",
            Color.Orange,
            "Allows extra movement. Aggravates the effects of Epidemic, Civil Disorder, and Iconoclasm & Heresy.",
            "During movement, each of your units may move two spaces.\n\nDuring Epidemic, lose 5 additional unit points.\nIf you are the primary victim of Civil Disorder, reduce an additional city.\nIf you are the primary victim of Iconoclasm & Heresy, reduce an additional city.",
            140,
            [
                new ColorDiscount(10, Color.Orange),
                new NamedDiscount(10, "Democracy"),
                new NamedDiscount(10, "Monotheism"),
            ],
            undefined,
            "Engineering"
        ),
        new Tech(
            "Mining",
            Color.Orange,
            "Increases the value of a set of metal commodities. Aggravates Slave Revolt.",
            "When acquiring civilization cards, you may score one incomplete set of Iron, Bronze, Silver, Gems, or Gold as though it had one additional card in it.\n\nIf you are the primary victim of Slave Revolt, 5 additional Units do not support cities.",
            160,
            [
                new ColorDiscount(10, Color.Orange),
                new NamedDiscount(10, "Democracy"),
                new NamedDiscount(10, "Monotheism"),
            ]
        ),
        new Tech(
            "Engineering",
            Color.Orange,
            "Strengthens city defenses and reduces the effects of Flood.",
            "When attacking a city owned by a player without Engineering, you only require 6 units. When defending a city from a player without Engineering, that player requires 8 units and your city is replaced by 7 units.\n\nIf you are the primary victim of Earthquake, reduce a city instead of destroying it. You are immune to the secondary effects of Earthquake.\nYou may lose a maximum of 7 unit points to Flood.",
            140,
            [
                new ColorDiscount(10, Color.Orange),
                new ColorDiscount(20, Color.Green),
                new NamedDiscount(10, "Democracy"),
                new NamedDiscount(20, "Philosophy"),
                new NamedDiscount(10, "Monotheism"),
                new NamedDiscount(20, "Theology"),
            ],
            undefined,
            undefined,
            Color.Green
        ),
        new Tech(
            "Drama & Poetry",
            Color.Blue,
            "Reduces the effects of Civil War & Civil Disorder.",
            "If you are the victim of Civil War, select 5 additional points for the first faction.\nIf you are the victim of Civil Disorder, reduce 1 fewer city.",
            60,
            [
                new ColorDiscount(5, Color.Blue),
                new NamedDiscount(20, "Literacy"),
                new NamedDiscount(5, "Law"),
                new NamedDiscount(10, "Democracy"),
                new NamedDiscount(10, "Enlightenment"),
            ]
        ),
        new Tech(
            "Music",
            Color.Blue,
            "Reduces the effects of Civil War & Civil Disorder.",
            "If you are the victim of Civil War, select 5 additional points for the first faction.\nIf you are the victim of Civil Disorder, reduce 1 fewer city.",
            60,
            [
                new ColorDiscount(5, Color.Blue),
                new NamedDiscount(20, "Mathematics"),
                new NamedDiscount(5, "Law"),
                new NamedDiscount(10, "Democracy"),
                new NamedDiscount(10, "Enlightenment"),
                new NamedDiscount(20, "Philosophy"),
            ]
        ),
        new Tech(
            "Architecture",
            Color.Blue,
            "Allows treasury to pay half of the cost of city construction.",
            "You may pay up to half of the cost of 1 city per turn from treasury instead of units at the area.",
            120,
            [
                new ColorDiscount(5, Color.Blue),
                new NamedDiscount(15, "Law"),
                new NamedDiscount(10, "Democracy"),
                new NamedDiscount(10, "Enlightenment"),
            ]
        ),
        new Tech(
            "Mysticism",
            Color.Blue,
            "Reduces the effects of Superstition.",
            "When you are the victim of Superstition, reduce at most 2 cities.",
            50,
            [
                new ColorDiscount(5, Color.Blue),
                new ColorDiscount(15, Color.Yellow),
            ],
            undefined,
            undefined,
            Color.Yellow
        ),
        new Tech(
            "Literacy",
            Color.Blue,
            "(no effect)",
            "(no effect)",
            110,
            [
                new ColorDiscount(5, Color.Blue),
                new NamedDiscount(25, "Law"),
                new NamedDiscount(25, "Democracy"),
                new NamedDiscount(25, "Philosophy"),
                new NamedDiscount(5, "Mysticism"),
                new NamedDiscount(10, "Enlightenment"),
            ],
            undefined,
            undefined,
            Color.Blood
        ),
        new Tech(
            "Mathematics",
            Color.Green,
            "(no effect)",
            "(no effect)",
            230,
            [
                new ColorDiscount(5, Color.Blue),
                new ColorDiscount(20, Color.Green),
                new NamedDiscount(5, "Mysticism"),
                new NamedDiscount(25, "Philosophy"),
                new NamedDiscount(10, "Enlightenment"),
                new NamedDiscount(25, "Theology"),
            ],
            undefined,
            undefined,
            Color.Blue
        ),
        new Tech(
            "Astronomy",
            Color.Green,
            "Permits voyages across open sea.",
            "Your ships may move across open sea.",
            80,
            [
                new ColorDiscount(20, Color.Green),
                new NamedDiscount(20, "Philosophy"),
                new NamedDiscount(20, "Theology"),
            ]
        ),
        new Tech(
            "Coinage",
            Color.Green,
            "Allows for changes in taxation.",
            "During the Collect Taxation step, you may tax your cities at a rate of 1, 2, or 3 per city.",
            110,
            [
                new ColorDiscount(20, Color.Green),
                new NamedDiscount(20, "Philosophy"),
                new NamedDiscount(20, "Theology"),
            ]
        ),
        new Tech(
            "Medicine",
            Color.Green,
            "Reduces the effects of Epidemic.",
            "When you are the primary or secondary victim of Epidemic, lose 5 fewer unit points.",
            140,
            [
                new ColorDiscount(20, Color.Green),
                new NamedDiscount(20, "Philosophy"),
                new NamedDiscount(20, "Theology"),
            ]
        ),
        new Tech(
            "Deism",
            Color.Yellow,
            "Reduces the effects of Superstition",
            "When you are the victim of Superstition, reduce at most 1 city.",
            80,
            [new ColorDiscount(15, Color.Yellow)]
        ),
        new Tech(
            "Enlightenment",
            Color.Yellow,
            "Reduces the effects of Slave Revolt. Nullifies the effects of Superstition",
            "You are immune to the effects of Superstition.",
            150,
            [new ColorDiscount(15, Color.Yellow)]
        ),
        new Tech(
            "Monotheism",
            Color.Yellow,
            "Allows conversion on one adjacent area each turn. Aggravates the effects of Iconoclasm & Heresy.",
            "After the Resolve Calamities step, you may replace all enemy units in one adjacent area with your own, provided the enemy does not have Monotheism or Theology.\n\nIf you are the primary victim of Iconoclasm & Heresy, reduce 1 additional city.",
            220,
            [new ColorDiscount(15, Color.Yellow)],
            undefined,
            "Enlightenment"
        ),
        new Tech(
            "Theology",
            Color.Yellow,
            "Nullifies Monotheism. Reduces the effects of Iconoclasm & Heresy.",
            "You are immune to Monotheism.\n\nIf you are the primary victim of Iconoclasm & Heresy, reduce 3 fewer cities. You are immune to the secondary effects of Iconoclasm & Heresy.",
            250,
            [new ColorDiscount(15, Color.Yellow)],
            undefined,
            "Enlightenment"
        ),
        new Tech(
            "Law",
            Color.Blood,
            "Reduces the effects of Civil Disorder and Iconoclasm & Heresy.",
            "If you are the primary victim of Iconoclasm & Heresy, reduce 1 fewer city.",
            170,
            []
        ),
        new Tech(
            "Military",
            Color.Blood,
            "Allows holder to move last. Aggravates effects of Civil War and Civil Disorder.",
            "You may construct ships and move units after all other players not holding Military.\n\nDuring Civil War, after both factions are selected, each faction loses 5 unit points.\nDuring Civil Disorder, reduce 1 additional city.",
            180,
            []
        ),
        new Tech(
            "Democracy",
            Color.Blood,
            "Cities never revolt",
            "You are immune to tax revolts.\nDuring Civil War, add 10 points to the first faction.\nDuring Civil Disorder, reduce 1 fewer city.",
            200,
            [],
            undefined,
            "Law"
        ),
        new Tech(
            "Philosophy",
            Color.Blood,
            "Reduces the effects of Iconoclasm & Heresy. Modifies Civil War.",
            "If you are the primary victim of Iconoclasm & Heresy, reduce 1 fewer city. If you are a secondary victim of Iconoclasm & Heresy, at most 1 of your cities may be selected.\n\nIf you are the victim of Civil War, the first faction is always made up of 15 unit points selected by the beneficiary.",
            240,
            [],
            undefined,
            "Law"
        ),
    ];
}

/**
 * Load the available techs for "Mega Civ"
 *
 * @export
 * @returns {Tech[]}
 */
export function loadMegaCivTechs(): Tech[] {
    return [
        new Tech(
            "Advanced Military",
            Color.Blood,
            "May lose tokens from adjacent areas. Aggravates Civil Disorder.",
            "May lose tokens from adjacent areas in Conflict. Ignore Cultural Ascendancy.\n\nCivil Disorder: +1 City.",
            240,
            [
                new ColorDiscount(20, Color.Blood),
                new ColorDiscount(5, Color.Green),
            ]
        ),
        new Tech(
            "Agriculture",
            Color.Orange,
            "Permits an increase in population. Aggravates Famine.",
            "+1 Population Limit for 0, 1, and 2 areas when alone.\n\nFamine: +5 Points if Primary.",
            120,
            [
                new ColorDiscount(10, Color.Orange),
                new ColorDiscount(5, Color.Green),
                new NamedDiscount(20, "Democracy"),
            ]
        ),
        new Tech(
            "Anatomy",
            Color.Green,
            "Immediately acquire an advance worth less than 100. Mitigates Epidemic.",
            "Immediately acquire a Science Advance with face value less than 100.\nEpidemic: -5 Points if Secondary.",
            270,
            [
                new ColorDiscount(5, Color.Orange),
                new ColorDiscount(20, Color.Green),
            ]
        ),
        new Tech(
            "Architecture",
            Color.Blue,
            "Allows treasury to pay half of the cost of city construction.",
            "You may pay up to half of the cost of 1 city per turn from treasury instead of units at the area.",
            140,
            [
                new ColorDiscount(10, Color.Blue),
                new ColorDiscount(5, Color.Green),
                new NamedDiscount(20, "Mining"),
            ]
        ),
        new Tech(
            "Astronavigation",
            Color.Green,
            "Ships may move in open sea.",
            "Ships may move in open sea.",
            80,
            [
                new ColorDiscount(5, Color.Yellow),
                new ColorDiscount(10, Color.Green),
                new NamedDiscount(10, "Calendar"),
            ]
        ),
        new Tech(
            "Calendar",
            Color.Green,
            "Reduces the effect of Famine and Cyclone.",
            "Famine: -5 Points.\nCyclone: -2 Cities.",
            180,
            [
                new ColorDiscount(5, Color.Blood),
                new ColorDiscount(10, Color.Green),
                new NamedDiscount(20, "Public Works"),
            ]
        ),
        new Tech(
            "Cartography",
            Color.Green,
            "Purchase cards from Stack 2 and/or Stack 7. Aggravates the effects of Piracy.",
            "Purchase cards from Stack 2 for 5 and/or cards from Stack 7 for 13.\n\nPiracy: Lose +1 City if Primary.",
            160,
            [
                new ColorDiscount(5, Color.Blue),
                new ColorDiscount(10, Color.Green),
                new NamedDiscount(20, "Library"),
            ]
        ),
        new Tech(
            "Cloth Making",
            Color.Orange,
            "Ships move 5.",
            "Ships move 5.",
            50,
            [
                new ColorDiscount(5, Color.Blue),
                new ColorDiscount(10, Color.Orange),
                new NamedDiscount(10, "Naval Warfare"),
            ]
        ),
        new Tech(
            "Coinage",
            Color.Green,
            "Allows for changes in taxation. Aggravates Corruption.",
            "During the Collect Taxation step, you adjust your tax rate at +/-1 per city.\n\nCorruption: Discard 5 additional points of face value.",
            90,
            [
                new ColorDiscount(5, Color.Blood),
                new ColorDiscount(10, Color.Green),
                new NamedDiscount(10, "Trade Routes"),
            ]
        ),
        new Tech(
            "Cultural Ascendancy",
            Color.Blue,
            "Others cannot attack your areas. Immune to Politics. City Support Rate +1.",
            "Others cannot cause conflict in your areas (negated by Advanced Military/Cultural Ascendancy). Immune to Politics.\n\nCity Support Rate +1.",
            280,
            [
                new ColorDiscount(20, Color.Blue),
                new ColorDiscount(5, Color.Yellow),
            ]
        ),
        new Tech(
            "Deism",
            Color.Yellow,
            "Superstition: -1 City.",
            "Superstition: Reduce 1 fewer city.",
            70,
            [
                new ColorDiscount(5, Color.Orange),
                new ColorDiscount(10, Color.Yellow),
                new NamedDiscount(10, "Fundamentalism"),
            ]
        ),
        new Tech(
            "Democracy",
            Color.Blood,
            "Cities never revolt.",
            "No Tax Revolts.\nCivil War: -10 Points.\nCivil Disorder: -1 City.",
            220,
            [
                new ColorDiscount(5, Color.Blue),
                new ColorDiscount(20, Color.Blood),
            ]
        ),
        new Tech(
            "Diaspora",
            Color.Yellow,
            "Move up to 5 tokens to any place on the board.",
            "Move up to 5 tokens to any place on the board (no overpopulation).",
            270,
            [
                new ColorDiscount(5, Color.Blue),
                new ColorDiscount(20, Color.Yellow),
            ]
        ),
        new Tech(
            "Diplomacy",
            Color.Blue,
            "Others cannot attack your cities. Aggravates Treachery.",
            "Others cannot enter your unconflicted City areas (negated by Military/Diplomacy).\n\nTreachery: +1 City.",
            160,
            [
                new ColorDiscount(10, Color.Blue),
                new ColorDiscount(5, Color.Blood),
                new NamedDiscount(20, "Provincial Empire"),
            ]
        ),
        new Tech(
            "Drama & Poetry",
            Color.Blue,
            "Reduces the effects of Civil War & Civil Disorder.",
            "Civil War: -5 Points.\nCivil Disorder: -1 City.",
            80,
            [
                new ColorDiscount(10, Color.Blue),
                new ColorDiscount(5, Color.Yellow),
                new NamedDiscount(10, "Rhetoric"),
            ]
        ),
        new Tech("Empiricism", Color.Green, "(no effect)", "(no effect)", 60, [
            new ColorDiscount(5, Color.Blue),
            new ColorDiscount(5, Color.Blood),
            new ColorDiscount(5, Color.Orange),
            new ColorDiscount(5, Color.Yellow),
            new ColorDiscount(10, Color.Green),
            new NamedDiscount(10, "Medicine"),
        ]),
        new Tech(
            "Engineering",
            Color.Orange,
            "Strengthens city defenses and reduces the effects of Flood.",
            "When attacking a city owned by a player without Engineering, you only require 6 units. When defending a city from a player without Engineering, that player requires 8 units and your city is replaced by 7 units.\nIf you are the primary victim of Earthquake, reduce a city instead of destroying it. You are immune to the secondary effects of Earthquake.\nFlood: -5 points.",
            160,
            [
                new ColorDiscount(10, Color.Orange),
                new ColorDiscount(10, Color.Green),
                new NamedDiscount(20, "Roadbuilding"),
            ],
            undefined,
            undefined,
            Color.Green
        ),
        new Tech(
            "Enlightenment",
            Color.Yellow,
            "Mitigates the effects of Superstition, Slave Revolt, Epidemic, and Regression.",
            "Superstition: -1 City.\nSlave Revolt: -1 Support Rate.\nEpidemic: -5 Points if Primary.\nRegression: Prevent each step of AST loss by destroying two cities. Non-coastal cities must be chosen first.",
            160,
            [
                new ColorDiscount(5, Color.Orange),
                new ColorDiscount(10, Color.Yellow),
                new NamedDiscount(20, "Philosophy"),
            ]
        ),
        new Tech(
            "Fundamentalism",
            Color.Yellow,
            "May destroy all units in one area. Aggravates Regression.",
            "May destroy all players' units in one area adjacent by land (negated by Fundamentalism/Philosophy).\n\nRegression: +1 AST step loss.",
            150,
            [
                new ColorDiscount(5, Color.Blue),
                new ColorDiscount(10, Color.Yellow),
                new NamedDiscount(20, "Monotheism"),
            ]
        ),
        new Tech(
            "Law",
            Color.Blood,
            "Reduces the effects of Tyranny, Civil Disorder, and Corruption.",
            "Tyranny: -5 Points.\nCivil Disorder: -1 City.\nCorruption: -5 Value.",
            150,
            [
                new ColorDiscount(10, Color.Blood),
                new ColorDiscount(5, Color.Yellow),
                new NamedDiscount(20, "Cultural Ascendancy"),
            ]
        ),
        new Tech(
            "Library",
            Color.Green,
            "Immediate 40 credits for another advance. Mitigates Regression.",
            "Immediate 40 credits for another advance.\nRegression: -1 AST step loss.",
            220,
            [
                new ColorDiscount(5, Color.Blue),
                new ColorDiscount(20, Color.Green),
            ]
        ),
        new Tech(
            "Literacy",
            Color.Blue,
            "(no effect)",
            "(no effect)",
            110,
            [
                new ColorDiscount(10, Color.Blue),
                new ColorDiscount(10, Color.Blood),
                new ColorDiscount(5, Color.Orange),
                new ColorDiscount(5, Color.Yellow),
                new ColorDiscount(5, Color.Green),
                new NamedDiscount(20, "Mathematics"),
            ],
            undefined,
            undefined,
            Color.Blood
        ),
        new Tech(
            "Masonry",
            Color.Orange,
            "Mitigates the effect of Cyclone.",
            "Cyclone: -1 City.",
            60,
            [
                new ColorDiscount(10, Color.Orange),
                new ColorDiscount(5, Color.Green),
                new NamedDiscount(10, "Engineering"),
            ]
        ),
        new Tech(
            "Mathematics",
            Color.Blue,
            "",
            "",
            250,
            [
                new ColorDiscount(20, Color.Blue),
                new ColorDiscount(10, Color.Blood),
                new ColorDiscount(10, Color.Orange),
                new ColorDiscount(10, Color.Yellow),
                new ColorDiscount(20, Color.Green),
            ],
            undefined,
            undefined,
            Color.Green
        ),
        new Tech(
            "Medicine",
            Color.Green,
            "Mitigates the effects of Epidemic.",
            "Epidemic: -5 Points (primary or secondary).",
            140,
            [
                new ColorDiscount(5, Color.Orange),
                new ColorDiscount(10, Color.Green),
                new NamedDiscount(20, "Anatomy"),
            ]
        ),
        new Tech(
            "Metalworking",
            Color.Orange,
            "Gives an advantage in battle.",
            "During combat, players without Metalworking lose casualties before players with Metalworking.",
            90,
            [
                new ColorDiscount(5, Color.Blood),
                new ColorDiscount(10, Color.Orange),
                new NamedDiscount(10, "Military"),
            ]
        ),
        new Tech(
            "Military",
            Color.Blood,
            "Allows holder to move last. Aggravates the effects of Civil War.",
            "Move after players without Military. Ignore Diplomacy.\n\nCivil War: +5 Points.",
            170,
            [
                new ColorDiscount(10, Color.Blood),
                new ColorDiscount(5, Color.Orange),
                new NamedDiscount(20, "Advanced Military"),
            ]
        ),
        new Tech(
            "Mining",
            Color.Orange,
            "Purchase from stack 6 or 8. Treasure worth double. Aggravates Slave Revolt.",
            "Purchase Stack 6 and/or 8 cards for 13 apiece. Treasure tokens are each worth 2 when purchasing advances.\n\nSlave Revolt: +1 Support Rate.",
            230,
            [
                new ColorDiscount(20, Color.Orange),
                new ColorDiscount(5, Color.Green),
            ]
        ),
        new Tech(
            "Monarchy",
            Color.Blood,
            "May increase your tax rate by 1. Mitigates Barbarian Hordes but aggravates Tyranny.",
            "You may increase your tax rate by 1.\nBarbarian Hordes: -5 Barbarians.\n\nTyranny: +5 Points.",
            60,
            [
                new ColorDiscount(10, Color.Blood),
                new ColorDiscount(5, Color.Yellow),
                new NamedDiscount(10, "Law"),
            ]
        ),
        new Tech(
            "Monotheism",
            Color.Yellow,
            "May annex all units in one area. Aggravates Iconoclasm and Heresy.",
            "May annex all players' units in one area adjacent by land (negated by Monotheism/Theology).\n\nIconoclasm and Heresy: +1 City.",
            240,
            [
                new ColorDiscount(5, Color.Blood),
                new ColorDiscount(20, Color.Yellow),
            ]
        ),
        new Tech(
            "Monument",
            Color.Orange,
            "+20 Discretionary Credits.",
            "+20 Discretionary Credits.",
            180,
            [
                new ColorDiscount(10, Color.Orange),
                new ColorDiscount(10, Color.Yellow),
                new NamedDiscount(20, "Wonder of the World"),
            ],
            20,
            undefined,
            Color.Yellow
        ),
        new Tech(
            "Music",
            Color.Blue,
            "Reduces the effects of Civil War & Civil Disorder.",
            "Civil War: -5 Points.\nCivil Disorder: -1 City.",
            80,
            [
                new ColorDiscount(10, Color.Blue),
                new ColorDiscount(5, Color.Yellow),
                new NamedDiscount(10, "Enlightenment"),
            ]
        ),
        new Tech(
            "Mysticism",
            Color.Blue,
            "Superstition: -1 City.",
            "Superstition: reduce one fewer city.",
            50,
            [
                new ColorDiscount(5, Color.Blue),
                new ColorDiscount(5, Color.Yellow),
                new NamedDiscount(10, "Monument"),
            ],
            undefined,
            undefined,
            Color.Yellow
        ),
        new Tech(
            "Mythology",
            Color.Yellow,
            "Slave Revolt: -1 Support Rate.",
            "Slave Revolt: -1 Support Rate.",
            60,
            [
                new ColorDiscount(5, Color.Blue),
                new ColorDiscount(10, Color.Yellow),
                new NamedDiscount(10, "Literacy"),
            ]
        ),
        new Tech(
            "Naval Warfare",
            Color.Blood,
            "Ships carry 6, and may be lost in conflict. Mitigates Piracy but aggravates Civil Disorder.",
            "Ships carry 6 tokens. May lose Ships in conflict.\nPiracy: -1 City as Primary, cannot be Secondary.\n\nCivil Disorder: +1 City.",
            160,
            [
                new ColorDiscount(10, Color.Blood),
                new ColorDiscount(5, Color.Orange),
                new NamedDiscount(20, "Diaspora"),
            ]
        ),
        new Tech(
            "Philosophy",
            Color.Yellow,
            "Immune to Fundamentalism. Mitigates Iconoclasm & Heresy but aggravates Civil War.",
            "Immune to Fundamentalism.\nIconoclasm and Heresy: -2 Cities.\n\nCivil War: +5 Points.",
            220,
            [
                new ColorDiscount(20, Color.Yellow),
                new ColorDiscount(20, Color.Green),
            ],
            undefined,
            undefined,
            Color.Green
        ),
        new Tech(
            "Politics",
            Color.Blue,
            "Gain 5 Treasury or pay treasury to annex an area. Aggravates Barbarian Hordes.",
            "Gain 5 Treasury or pay unit cost from treasury to annex all players' units in area adjacent by land (negated by Politics/Cultural Ascendancy).\n\nBarbarian Hordes: +5 Barbarians.",
            230,
            [
                new ColorDiscount(20, Color.Blue),
                new ColorDiscount(5, Color.Yellow),
            ]
        ),
        new Tech(
            "Pottery",
            Color.Orange,
            "Famine: -5 Points.",
            "Famine: -5 Points.",
            60,
            [
                new ColorDiscount(5, Color.Blue),
                new ColorDiscount(10, Color.Orange),
                new NamedDiscount(10, "Agriculture"),
            ]
        ),
        new Tech(
            "Provincial Empire",
            Color.Blood,
            "Acquire trade cards from neighbors. Aggravates Barbarian Hordes and Tyranny.",
            "Gain trade card of 2+ from up to 5 players with units adjacent by land or sea (negated by Provincial Empire/Public Works).\n\nBarbarian Hordes: +5 Barbarians.\nTyranny: +5 Points.",
            260,
            [
                new ColorDiscount(20, Color.Blood),
                new ColorDiscount(5, Color.Yellow),
            ]
        ),
        new Tech(
            "Public Works",
            Color.Blood,
            "Cities may each have 1 token in the same area. Immune to Provincial Empire.",
            "Cities may each have 1 token in the same area. Immune to Provincial Empire.",
            230,
            [
                new ColorDiscount(20, Color.Blood),
                new ColorDiscount(5, Color.Orange),
            ]
        ),
        new Tech(
            "Rhetoric",
            Color.Blue,
            "Purchase Stack 3 cards for 9.",
            "Purchase cards from Stack 3 for 9 apiece.",
            130,
            [
                new ColorDiscount(10, Color.Blue),
                new ColorDiscount(5, Color.Blood),
                new NamedDiscount(20, "Politics"),
            ]
        ),
        new Tech(
            "Roadbuilding",
            Color.Orange,
            "Tokens may move 2 areas per turn. Trade hand limit +1. Aggravates Epidemic.",
            "Tokens may move 2 areas per turn. Trade hand limit +1.\n\nEpidemic: +5 Points if Primary.",
            220,
            [
                new ColorDiscount(20, Color.Orange),
                new ColorDiscount(5, Color.Green),
            ]
        ),
        new Tech(
            "Sculpture",
            Color.Blue,
            "Tyranny: -5 Points.",
            "Tyranny: -5 Points.",
            50,
            [
                new ColorDiscount(10, Color.Blue),
                new ColorDiscount(5, Color.Blood),
                new NamedDiscount(10, "Architecture"),
            ]
        ),
        new Tech(
            "Theocracy",
            Color.Blood,
            "May spend cards to mitigate Iconoclasm and Heresy.",
            "Iconoclasm and Heresy: you may discard 2 trade cards to cancel the effect.",
            80,
            [
                new ColorDiscount(5, Color.Blood),
                new ColorDiscount(5, Color.Yellow),
                new NamedDiscount(10, "Universal Doctrine"),
            ],
            undefined,
            undefined,
            Color.Yellow
        ),
        new Tech(
            "Theology",
            Color.Yellow,
            "Immune to Monotheism. Mitigates Iconoclasm and Heresy.",
            "Immune to Monotheism. Iconoclasm and Heresy: -3 Cities.",
            250,
            [
                new ColorDiscount(20, Color.Yellow),
                new ColorDiscount(5, Color.Green),
            ]
        ),
        new Tech(
            "Trade Empire",
            Color.Orange,
            "May trade in a non-matching card in one set per turn. Aggravates the effects of Cyclone and Epidemic.",
            "Once per turn: May trade in a non-matching trade card as part of set of a lower or equal value.\n\nCyclone: +1 City.\nEpidemic: +5 Points if Primary.",
            260,
            [
                new ColorDiscount(5, Color.Blood),
                new ColorDiscount(20, Color.Orange),
            ]
        ),
        new Tech(
            "Trade Routes",
            Color.Orange,
            "You may discard trade cards to gain double their face value in treasury.",
            "You may discard trade cards to gain double their face value in treasury.",
            180,
            [
                new ColorDiscount(10, Color.Orange),
                new ColorDiscount(5, Color.Yellow),
                new NamedDiscount(20, "Trade Empire"),
            ]
        ),
        new Tech(
            "Universal Doctrine",
            Color.Yellow,
            "May annex non-player pieces. Aggravates Superstition.",
            "May annex 1 Pirate City or up to 5 Barbarian Tokens anywhere on board.\n\nSuperstition: reduce an additional city.",
            160,
            [
                new ColorDiscount(5, Color.Blood),
                new ColorDiscount(10, Color.Yellow),
                new NamedDiscount(20, "Theology"),
            ]
        ),
        new Tech(
            "Urbanism",
            Color.Blood,
            "Use tokens from adjacent areas to construct wilderness cities.",
            "Once per turn: Use up to 4 tokens from adjacent areas to construct a wilderness city.",
            50,
            [
                new ColorDiscount(10, Color.Blood),
                new ColorDiscount(5, Color.Green),
                new NamedDiscount(10, "Diplomacy"),
            ]
        ),
        new Tech(
            "Wonder of the World",
            Color.Blue,
            "Draw from a stack higher than your city count. Counts as a City for AST. Aggravates Corruption.",
            "When acquiring trade cards, gain 1 trade card from any stack not drawn from this turn. Counts as a City for AST.\n\nCorruption: +5 Points.",
            290,
            [
                new ColorDiscount(20, Color.Blue),
                new ColorDiscount(20, Color.Orange),
            ],
            undefined,
            undefined,
            Color.Orange
        ),
        new Tech(
            "Written Record",
            Color.Blood,
            "+10 Discretionary Credits.",
            "+10 Discretionary Credits.",
            60,
            [
                new ColorDiscount(5, Color.Blood),
                new ColorDiscount(5, Color.Green),
                new NamedDiscount(10, "Cartography"),
            ],
            10,
            undefined,
            Color.Green
        ),
    ];
}
