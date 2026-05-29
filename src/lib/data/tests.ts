import { TestData, Segment, OptionLabel } from '@/lib/types';

function t(content: string): Segment {
  return { type: 'text', content };
}

function o(label: OptionLabel, content: string): Segment {
  return { type: 'option', content, label };
}

export const TESTS: Record<number, TestData> = {
  1: {
    id: 1,
    title: 'Complete Test One',
    questions: [
      // ── STRUCTURE ───────────────────────────────────────────────
      {
        id: 1, type: 'structure',
        text: '______ range in color from pale yellow to bright orange.',
        options: [
          { label: 'A', text: 'Canaries which' },
          { label: 'B', text: 'Canaries' },
          { label: 'C', text: 'That canaries' },
          { label: 'D', text: 'Canaries that are' },
        ],
        answer: 'B',
      },
      {
        id: 2, type: 'structure',
        text: '______ of precious gems is determined by their hardness, color, and brilliance.',
        options: [
          { label: 'A', text: 'The valuable' },
          { label: 'B', text: 'It is the value' },
          { label: 'C', text: 'It is valuable' },
          { label: 'D', text: 'The value' },
        ],
        answer: 'D',
      },
      {
        id: 3, type: 'structure',
        text: '______ a tornado spins in a counterclockwise direction in the northern hemisphere, it spins in the opposite direction in the southern hemisphere.',
        options: [
          { label: 'A', text: 'However' },
          { label: 'B', text: 'Because of' },
          { label: 'C', text: 'Although' },
          { label: 'D', text: 'That' },
        ],
        answer: 'C',
      },
      {
        id: 4, type: 'structure',
        text: 'The Caldecott Medal, ______ for the best children\'s picture book, is awarded each January.',
        options: [
          { label: 'A', text: 'a prize' },
          { label: 'B', text: 'which prize' },
          { label: 'C', text: 'is a prize which' },
          { label: 'D', text: 'is a prize' },
        ],
        answer: 'A',
      },
      {
        id: 5, type: 'structure',
        text: 'The horn of the rhinoceros consists of a cone of tight bundles of keratin ______ from the epidermis.',
        options: [
          { label: 'A', text: 'grow' },
          { label: 'B', text: 'grows' },
          { label: 'C', text: 'growing' },
          { label: 'D', text: 'they grow' },
        ],
        answer: 'C',
      },
      {
        id: 6, type: 'structure',
        text: 'Most species of heliotropes are weeds, ______ of them are cultivated.',
        options: [
          { label: 'A', text: 'some' },
          { label: 'B', text: 'but some' },
          { label: 'C', text: 'for some species' },
          { label: 'D', text: 'some species' },
        ],
        answer: 'B',
      },
      {
        id: 7, type: 'structure',
        text: 'Thunder occurs as ______ through air, causing the heated air to expand and collide with layers of cooler air.',
        options: [
          { label: 'A', text: 'an electrical charge' },
          { label: 'B', text: 'passes an electrical charge' },
          { label: 'C', text: 'the passing of an electrical charge' },
          { label: 'D', text: 'an electrical charge passes' },
        ],
        answer: 'D',
      },
      {
        id: 8, type: 'structure',
        text: 'Researchers have long debated ______ Saturn\'s moon Titan contains hydrocarbon oceans and lakes.',
        options: [
          { label: 'A', text: 'over it' },
          { label: 'B', text: 'whether it' },
          { label: 'C', text: 'whether' },
          { label: 'D', text: 'whether over' },
        ],
        answer: 'C',
      },
      {
        id: 9, type: 'structure',
        text: 'Nimbostratus clouds are thick, dark grey clouds ______ forebode rain.',
        options: [
          { label: 'A', text: 'what' },
          { label: 'B', text: 'which' },
          { label: 'C', text: 'what they' },
          { label: 'D', text: 'which they' },
        ],
        answer: 'B',
      },
      {
        id: 10, type: 'structure',
        text: '______ in several early civilizations, a cubit was based on the length of the forearm from the tip of the middle finger to the elbow.',
        options: [
          { label: 'A', text: 'It was used as a measurement' },
          { label: 'B', text: 'A measurement was used' },
          { label: 'C', text: 'The use of a measurement' },
          { label: 'D', text: 'Used as a measurement' },
        ],
        answer: 'D',
      },
      {
        id: 11, type: 'structure',
        text: 'Only when air and water seep through its outer coat ______.',
        options: [
          { label: 'A', text: 'does a seed germinate' },
          { label: 'B', text: 'to the germination of a seed' },
          { label: 'C', text: 'a seed germinates' },
          { label: 'D', text: 'for a seed to germinate' },
        ],
        answer: 'A',
      },
      {
        id: 12, type: 'structure',
        text: '______ seasonal rainfall, especially in regions near the tropics, is winds that blow in an opposite direction in winter than in summer.',
        options: [
          { label: 'A', text: 'Causing' },
          { label: 'B', text: 'That cause' },
          { label: 'C', text: 'To cause' },
          { label: 'D', text: 'What causes' },
        ],
        answer: 'D',
      },
      {
        id: 13, type: 'structure',
        text: 'The extinct Martian volcano Olympus Mons is approximately three times as ______ Mount Everest.',
        options: [
          { label: 'A', text: 'high' },
          { label: 'B', text: 'high as is' },
          { label: 'C', text: 'higher than' },
          { label: 'D', text: 'the highest of' },
        ],
        answer: 'B',
      },
      {
        id: 14, type: 'structure',
        text: 'The flight instructor, ______ at the air base, said that orders not to fight had been given.',
        options: [
          { label: 'A', text: 'when interviewed' },
          { label: 'B', text: 'when he interviewed' },
          { label: 'C', text: 'when his interview' },
          { label: 'D', text: 'when interviewing' },
        ],
        answer: 'A',
      },
      {
        id: 15, type: 'structure',
        text: 'In the northern and central parts of the state of Idaho ______ and churning rivers.',
        options: [
          { label: 'A', text: 'majestic mountains are found' },
          { label: 'B', text: 'found majestic mountains' },
          { label: 'C', text: 'are found majestic mountains' },
          { label: 'D', text: 'finding majestic mountains' },
        ],
        answer: 'C',
      },
      // ── WRITTEN EXPRESSION ──────────────────────────────────────
      {
        id: 16, type: 'written_expression',
        segments: [o('A','Light'), t(' can '), o('B','travels'), t(' from the Sun to the Earth '), o('C','in'), t(' eight minutes and twenty '), o('D','seconds'), t('.')],
        answer: 'B', correction: 'travel',
      },
      {
        id: 17, type: 'written_expression',
        segments: [t('Every human '), o('A','typically'), t(' '), o('B','have'), t(' twenty-three pairs of chromosomes in '), o('C','most'), t(' '), o('D','cells'), t('.')],
        answer: 'B', correction: 'has',
      },
      {
        id: 18, type: 'written_expression',
        segments: [o('A','Most'), t(' sedimentary rocks '), o('B','start forming'), t(' when grains of clay, silt, or '), o('C','sandy'), t(' settle in river valleys or on the bottoms of lakes and '), o('D','oceans'), t('.')],
        answer: 'C', correction: 'sand',
      },
      {
        id: 19, type: 'written_expression',
        segments: [t('The total thickness of the ventricular '), o('A','walls'), t(' of the heart '), o('B','are'), t(' '), o('C','about'), t(' three times that of the '), o('D','atria'), t('.')],
        answer: 'B', correction: 'is',
      },
      {
        id: 20, type: 'written_expression',
        segments: [t('The type of jazz '), o('A','known'), t(' as "swing" was '), o('B','introduced'), t(' by Duke Ellington when he '), o('C','wrote'), t(' and '), o('D','records'), t(' "It Don\'t Mean a Thing If It Ain\'t Got That Swing."')],
        answer: 'D', correction: 'recorded',
      },
      {
        id: 21, type: 'written_expression',
        segments: [t('The bones of mammals, not '), o('A','alike'), t(' '), o('B','those'), t(' of other '), o('C','vertebrates'), t(', show a high degree of '), o('D','differentiation'), t('.')],
        answer: 'A', correction: 'like',
      },
      {
        id: 22, type: 'written_expression',
        segments: [o('A','The'), t(' neocortex has '), o('B','evolved'), t(' more recently '), o('C','then'), t(' other layers of the '), o('D','brain'), t('.')],
        answer: 'C', correction: 'than',
      },
      {
        id: 23, type: 'written_expression',
        segments: [t('The United States '), o('A','receives'), t(' a large '), o('B','amount'), t(' of revenue from '), o('C','taxation'), t(' of '), o('D','a'), t(' tobacco products.')],
        answer: 'D', correction: 'of',
      },
      {
        id: 24, type: 'written_expression',
        segments: [o('A','Much'), t(' fats are composed of one molecule of glycerin '), o('B','combined with'), t(' three molecules of '), o('C','fatty'), t(' '), o('D','acids'), t('.')],
        answer: 'A', correction: 'Many',
      },
      {
        id: 25, type: 'written_expression',
        segments: [t('The '), o('A','capital'), t(' of the Confederacy was '), o('B','originally'), t(' in Mobile, but '), o('C','they'), t(' were '), o('D','moved'), t(' to Richmond.')],
        answer: 'C', correction: 'it was',
      },
      {
        id: 26, type: 'written_expression',
        segments: [t('A pearl develops '), o('A','when'), t(' a tiny grain of sand or stone or some '), o('B','another'), t(' '), o('C','irritant'), t(' accidentally '), o('D','enters'), t(' into the shell of a pearl oyster.')],
        answer: 'B', correction: 'other',
      },
      {
        id: 27, type: 'written_expression',
        segments: [t('The English horn is '), o('A','an'), t(' alto oboe with a '), o('B','pitch'), t(' one-fifth lower '), o('C','than'), t(' '), o('D','the'), t(' soprano oboe.')],
        answer: 'D', correction: 'that of the',
      },
      {
        id: 28, type: 'written_expression',
        segments: [t('In the Milky Way galaxy, the '), o('A','most'), t(' '), o('B','recent'), t(' observed supernova '), o('C','appeared'), t(' in '), o('D','1604'), t('.')],
        answer: 'B', correction: 'recently',
      },
      {
        id: 29, type: 'written_expression',
        segments: [t('Never in the history of '), o('A','humanity'), t(' '), o('B','has'), t(' there been more people '), o('C','living'), t(' on this '), o('D','relatively'), t(' small planet.')],
        answer: 'B', correction: 'have',
      },
      {
        id: 30, type: 'written_expression',
        segments: [t('Because of the '), o('A','mobility'), t(' of Americans today, it is '), o('B','difficult'), t(' for '), o('C','they'), t(' to put down real '), o('D','roots'), t('.')],
        answer: 'C', correction: 'them',
      },
      {
        id: 31, type: 'written_expression',
        segments: [o('A','For'), t(' five years after the Civil War, Robert E. Lee served '), o('B','to'), t(' president of Washington College, '), o('C','which'), t(' was '), o('D','later'), t(' called Washington and Lee.')],
        answer: 'B', correction: 'as',
      },
      {
        id: 32, type: 'written_expression',
        segments: [t('The '), o('A','number'), t(' of wild horses on Assateague is increasing '), o('B','lately'), t(', '), o('C','resulting'), t(' in overgrazed marsh and dune '), o('D','grasses'), t('.')],
        answer: 'B', correction: 'has been',
      },
      {
        id: 33, type: 'written_expression',
        segments: [o('A','Hypnoses'), t(' was '), o('B','successfully'), t(' used '), o('C','during'), t(' World War II to treat '), o('D','battle fatigue'), t('.')],
        answer: 'A', correction: 'Hypnosis',
      },
      {
        id: 34, type: 'written_expression',
        segments: [t('The lobster, '), o('A','like'), t(' '), o('B','many'), t(' crustaceans, can cast off a '), o('C','damaging'), t(' appendage and regenerate a new appendage to nearly '), o('D','normal'), t(' size.')],
        answer: 'C', correction: 'damaged',
      },
      {
        id: 35, type: 'written_expression',
        segments: [t('Humans '), o('A','develop'), t(' normally twenty '), o('B','primary'), t(', '), o('C','or'), t(' deciduous, teeth and thirty-two '), o('D','permanent'), t(' ones.')],
        answer: 'A', correction: 'normally develop',
      },
      {
        id: 36, type: 'written_expression',
        segments: [o('A','The'), t(' curricula of American public schools '), o('B','are'), t(' set in individual states; they '), o('C','do not determine'), t(' by the '), o('D','federal'), t(' government.')],
        answer: 'C', correction: 'are not determined',
      },
      {
        id: 37, type: 'written_expression',
        segments: [t('The fact that the sophisticated technology '), o('A','has become'), t(' part of '), o('B','revolution'), t(' in travel '), o('C','delivery'), t(' systems has not made travel schedules '), o('D','less'), t(' hectic.')],
        answer: 'B', correction: 'a revolution',
      },
      {
        id: 38, type: 'written_expression',
        segments: [t("Balanchine's "), o('A','plotless'), t(' ballets, '), o('B','such'), t(' Jewels and The Four Temperaments, '), o('C','present'), t(' dance '), o('D','purely'), t(' as a celebration of the movement of the human body.')],
        answer: 'B', correction: 'such as',
      },
      {
        id: 39, type: 'written_expression',
        segments: [t('In a '), o('A','solar'), t(' battery, a photosensitive '), o('B','semiconducting'), t(' substance '), o('C','such as'), t(' silicon crystal is the source of '), o('D','electrician'), t('.')],
        answer: 'D', correction: 'electricity',
      },
      {
        id: 40, type: 'written_expression',
        segments: [t('In '), o('A','early'), t(' days, hydrochloric acid was '), o('B','done'), t(' by '), o('C','heating'), t(' a mixture of sodium chloride with iron '), o('D','sulfate'), t('.')],
        answer: 'B', correction: 'made',
      },
    ],
  },

  2: {
    id: 2,
    title: 'Complete Test Two',
    questions: [
      // ── STRUCTURE ───────────────────────────────────────────────
      {
        id: 1, type: 'structure',
        text: 'The hard palate ______ between the mouth and nasal passages.',
        options: [
          { label: 'A', text: 'forming a partition' },
          { label: 'B', text: 'a partition forms' },
          { label: 'C', text: 'forms a partition' },
          { label: 'D', text: 'a form and a partition' },
        ],
        answer: 'C',
      },
      {
        id: 2, type: 'structure',
        text: 'Sam Spade in The Maltese Falcon and Rick Blaine in Casablanca ______ of Humphrey Bogart\'s more famous roles.',
        options: [
          { label: 'A', text: 'they are two' },
          { label: 'B', text: 'two of them are' },
          { label: 'C', text: 'two of them' },
          { label: 'D', text: 'are two' },
        ],
        answer: 'D',
      },
      {
        id: 3, type: 'structure',
        text: '______, the outermost layer of skin, is about as thick as a sheet of paper over most of the skin.',
        options: [
          { label: 'A', text: 'It is the epidermis' },
          { label: 'B', text: 'The epidermis' },
          { label: 'C', text: 'In the epidermis' },
          { label: 'D', text: 'The epidermis is' },
        ],
        answer: 'B',
      },
      {
        id: 4, type: 'structure',
        text: 'During the Precambrian period, the Earth\'s crust formed, and life ______ in the seas.',
        options: [
          { label: 'A', text: 'first appeared' },
          { label: 'B', text: 'the first to appear' },
          { label: 'C', text: 'the first appearance' },
          { label: 'D', text: 'appearing first' },
        ],
        answer: 'A',
      },
      {
        id: 5, type: 'structure',
        text: 'When fluid accumulates against the eardrum, a second more insidious type of ______.',
        options: [
          { label: 'A', text: 'otitis media may develop' },
          { label: 'B', text: 'developing otitis media' },
          { label: 'C', text: 'the development of otitis media' },
          { label: 'D', text: 'to develop otitis media' },
        ],
        answer: 'A',
      },
      {
        id: 6, type: 'structure',
        text: 'Before the Statue of Liberty arrived in the United States, newspapers invited the public to help determine where ______ placed after its arrival.',
        options: [
          { label: 'A', text: 'should the statue be' },
          { label: 'B', text: 'the statue being' },
          { label: 'C', text: 'it should be the statue' },
          { label: 'D', text: 'the statue should be' },
        ],
        answer: 'D',
      },
      {
        id: 7, type: 'structure',
        text: 'A stock ______ at an inflated price is called a watered stock.',
        options: [
          { label: 'A', text: 'is issued' },
          { label: 'B', text: 'issued' },
          { label: 'C', text: 'it is issued' },
          { label: 'D', text: 'which issued' },
        ],
        answer: 'B',
      },
      {
        id: 8, type: 'structure',
        text: 'Acidic lava flows readily and tends to cover much larger areas, while basic lava ______.',
        options: [
          { label: 'A', text: 'viscous' },
          { label: 'B', text: 'more viscous' },
          { label: 'C', text: 'is more viscous' },
          { label: 'D', text: 'it is more viscous' },
        ],
        answer: 'C',
      },
      {
        id: 9, type: 'structure',
        text: 'Seismic reflection profiling has ______ the ocean floor is underlain by a thin layer of nearly transparent sediments.',
        options: [
          { label: 'A', text: 'reveal that' },
          { label: 'B', text: 'revealed that' },
          { label: 'C', text: 'the revelation of' },
          { label: 'D', text: 'revealed about' },
        ],
        answer: 'B',
      },
      {
        id: 10, type: 'structure',
        text: '______ and terrifying, coral snakes can grow to 4 feet (1.2 meters) in length.',
        options: [
          { label: 'A', text: 'They are extremely poisonous' },
          { label: 'B', text: 'The poison is extreme' },
          { label: 'C', text: 'Extremely poisonous' },
          { label: 'D', text: 'An extreme amount of poison' },
        ],
        answer: 'C',
      },
      {
        id: 11, type: 'structure',
        text: 'The leaves of the white mulberry provide food for silkworms, ______ silk fabrics are woven.',
        options: [
          { label: 'A', text: 'whose cocoons' },
          { label: 'B', text: 'from cocoons' },
          { label: 'C', text: 'whose cocoons are from' },
          { label: 'D', text: 'from whose cocoons' },
        ],
        answer: 'D',
      },
      {
        id: 12, type: 'structure',
        text: 'As ______ in Greek and Roman mythology, harpies were frightful monsters that were half woman and half bird.',
        options: [
          { label: 'A', text: 'described' },
          { label: 'B', text: 'to describe' },
          { label: 'C', text: 'description' },
          { label: 'D', text: 'describing' },
        ],
        answer: 'A',
      },
      {
        id: 13, type: 'structure',
        text: 'Not only ______ generate energy, but it also produces fuel for other fission reactors.',
        options: [
          { label: 'A', text: 'a nuclear breeder reactor' },
          { label: 'B', text: 'it is a nuclear breeder reactor' },
          { label: 'C', text: 'does a nuclear breeder reactor' },
          { label: 'D', text: 'is a nuclear breeder reactor' },
        ],
        answer: 'C',
      },
      {
        id: 14, type: 'structure',
        text: 'D.W. Griffith pioneered many of the stylistic features and filmmaking techniques ______ as the Hollywood standard.',
        options: [
          { label: 'A', text: 'that established' },
          { label: 'B', text: 'that became established' },
          { label: 'C', text: 'what established' },
          { label: 'D', text: 'what became established' },
        ],
        answer: 'B',
      },
      {
        id: 15, type: 'structure',
        text: '______ be needed, the water basin would need to be dammed.',
        options: [
          { label: 'A', text: 'Hydroelectric power should' },
          { label: 'B', text: 'When hydroelectric power' },
          { label: 'C', text: 'Hydroelectric power' },
          { label: 'D', text: 'Should hydroelectric power' },
        ],
        answer: 'D',
      },
      // ── WRITTEN EXPRESSION ──────────────────────────────────────
      {
        id: 16, type: 'written_expression',
        segments: [t('Mosquitoes will '), o('A','accepts'), t(' the malaria '), o('B','parasite'), t(' at '), o('C','only one'), t(' stage of the parasite\'s complex '), o('D','life cycle'), t('.')],
        answer: 'A', correction: 'accept',
      },
      {
        id: 17, type: 'written_expression',
        segments: [t('The '), o('A','counterpart'), t(' of a '), o('B','negative'), t(' '), o('C','electrons'), t(' is the '), o('D','positive'), t(' proton.')],
        answer: 'C', correction: 'electron',
      },
      {
        id: 18, type: 'written_expression',
        segments: [t("Alexander Hamilton's "), o('A','advocacy'), t(' of a '), o('B','strong'), t(' national government brought he into bitter '), o('C','conflict'), t(' with Thomas '), o('D','Jefferson'), t('.')],
        answer: 'C', correction: 'him',
      },
      {
        id: 19, type: 'written_expression',
        segments: [t('There '), o('A','are'), t(' more than eighty-four million '), o('B','specimens'), t(' in the National Museum of Natural History\'s '), o('C','collection'), t(' of biological, geological, archeological, and '), o('D','anthropology'), t(' treasures.')],
        answer: 'D', correction: 'anthropological',
      },
      {
        id: 20, type: 'written_expression',
        segments: [o('A','After'), t(' George Washington married '), o('B','widow'), t(' Martha Custis, the couple '), o('C','comes'), t(' to '), o('D','reside'), t(' at Mount Vernon.')],
        answer: 'C', correction: 'came',
      },
      {
        id: 21, type: 'written_expression',
        segments: [o('A','Rubberized'), t(' asphalt can '), o('B','hardly'), t(' be classified '), o('C','as'), t(' cutting edge at this stage in '), o('D','their'), t(' development.')],
        answer: 'D', correction: 'its',
      },
      {
        id: 22, type: 'written_expression',
        segments: [t('Rhesus '), o('A','monkeys'), t(' '), o('B','exhibit'), t(' patterns of '), o('C','shyness'), t(' similar to '), o('D','that'), t(' in humans.')],
        answer: 'D', correction: 'those',
      },
      {
        id: 23, type: 'written_expression',
        segments: [t('In space, with '), o('A','no'), t(' gravity for muscles to work '), o('B','against'), t(', '), o('C','the body'), t(' becomes '), o('D','weakly'), t('.')],
        answer: 'D', correction: 'weak',
      },
      {
        id: 24, type: 'written_expression',
        segments: [t('Fort Jefferson, in the Dry Tortugas '), o('A','off'), t(' the southern '), o('B','tip'), t(' of Florida, can be '), o('C','reach'), t(' only by '), o('D','boat'), t(' or plane.')],
        answer: 'C', correction: 'reached',
      },
      {
        id: 25, type: 'written_expression',
        segments: [t('Quarter horses were '), o('A','developed'), t(' in eighteenth-century Virginia to '), o('B','race'), t(' on '), o('C','courses'), t(' short of about a quarter of a mile in '), o('D','length'), t('.')],
        answer: 'C', correction: 'short courses',
      },
      {
        id: 26, type: 'written_expression',
        segments: [o('A','Supersonic'), t(' flight is flight '), o('B','that'), t(' is '), o('C','faster'), t(' the speed of '), o('D','sound'), t('.')],
        answer: 'C', correction: 'faster than',
      },
      {
        id: 27, type: 'written_expression',
        segments: [t('Since the dawn of agriculture 9,000 years '), o('A','ago'), t(', only '), o('B','a'), t(' '), o('C','few'), t(' animal species '), o('D','had been'), t(' domesticated.')],
        answer: 'D', correction: 'have been',
      },
      {
        id: 28, type: 'written_expression',
        segments: [t('The Betataken House Ruins at Navajo National Monument '), o('A','is'), t(' among the '), o('B','largest'), t(' and most '), o('C','elaborate'), t(' cliff dwellings in the '), o('D','country'), t('.')],
        answer: 'A', correction: 'are',
      },
      {
        id: 29, type: 'written_expression',
        segments: [t('The island of Kauai has '), o('A','much'), t(' streams, some '), o('B','of which'), t(' have '), o('C','worn'), t(' deep canyons into the '), o('D','rock'), t('.')],
        answer: 'A', correction: 'many',
      },
      {
        id: 30, type: 'written_expression',
        segments: [t('It is '), o('A','a common'), t(' observation that liquids '), o('B','will soak'), t(' through some materials '), o('C','but not'), t(' through '), o('D','other'), t('.')],
        answer: 'D', correction: 'others',
      },
      {
        id: 31, type: 'written_expression',
        segments: [o('A','Surrounded'), t(' by forested mountain '), o('B','slopes'), t(' are the town of Telluride, a '), o('C','former'), t(' gold-mining town 7,500 feet above '), o('D','sea level'), t('.')],
        answer: 'B', correction: 'slopes is',
      },
      {
        id: 32, type: 'written_expression',
        segments: [t('The newsreels of Hearst Metronome News, which formed part of '), o('A','every'), t(" moviegoer's experience in the era "), o('B','before'), t(' television, offer '), o('C','an'), t(' unique record of the '), o('D','events'), t(' of the 1930s.')],
        answer: 'C', correction: 'a',
      },
      {
        id: 33, type: 'written_expression',
        segments: [o('A','Probably'), t(' '), o('B','the best known'), t(' of all dinosaurs, the Tyrannosaurus was '), o('C','larger'), t(' and '), o('D','last'), t(' of the meat-eating carnosaurs.')],
        answer: 'C', correction: 'the largest',
      },
      {
        id: 34, type: 'written_expression',
        segments: [o('A','Unlikely'), t(' gas '), o('B','sport'), t(' balloons, hot air balloons do not '), o('C','have'), t(' '), o('D','nets'), t('.')],
        answer: 'A', correction: 'Unlike',
      },
      {
        id: 35, type: 'written_expression',
        segments: [o('A','Born'), t(' in Massachusetts in 1852, Albert Farbanks '), o('B','has begun'), t(' '), o('C','making'), t(' banjos in Boston in the '), o('D','late'), t(' 1870s.')],
        answer: 'B', correction: 'began',
      },
      {
        id: 36, type: 'written_expression',
        segments: [t('Methane in wetlands '), o('A','comes'), t(' '), o('B','from'), t(' soil bacteria that '), o('C','consumes'), t(' organic plant '), o('D','matter'), t('.')],
        answer: 'C', correction: 'consume',
      },
      {
        id: 37, type: 'written_expression',
        segments: [t('Alois Alzheimer made the first '), o('A','observers'), t(' of the '), o('B','telltale'), t(' signs of the disease that today '), o('C','bears'), t(' '), o('D','his'), t(' name.')],
        answer: 'A', correction: 'observations',
      },
      {
        id: 38, type: 'written_expression',
        segments: [t('Edward McDowell '), o('A','remembers'), t(' as the '), o('B','composer'), t(' of such '), o('C','perennial'), t(' '), o('D','favorites'), t(' as "To a Wild Rose" and "To a Water Lily."')],
        answer: 'A', correction: 'is remembered',
      },
      {
        id: 39, type: 'written_expression',
        segments: [t('Animism is the '), o('A','belief'), t(' that objects and natural '), o('B','phenomena'), t(' such as rivers, rocks, and wind are '), o('C','live'), t(' and have '), o('D','feelings'), t('.')],
        answer: 'C', correction: 'alive',
      },
      {
        id: 40, type: 'written_expression',
        segments: [t('Newtonian physics '), o('A','accounts'), t(' '), o('B','from'), t(' the '), o('C','observation'), t(' of the '), o('D','orbits'), t(' of the planets and moons.')],
        answer: 'B', correction: 'for',
      },
    ],
  },

  3: {
    id: 3,
    title: 'Complete Test Three',
    incomplete: true,
    incompleteFrom: 26,
    questions: [
      // ── STRUCTURE ───────────────────────────────────────────────
      {
        id: 1, type: 'structure',
        text: 'In the late 1880s, Hull House ______ United States\' first welfare state.',
        options: [
          { label: 'A', text: 'to become the' },
          { label: 'B', text: 'became the' },
          { label: 'C', text: 'becoming one of the' },
          { label: 'D', text: 'it became the' },
        ],
        answer: 'B',
      },
      {
        id: 2, type: 'structure',
        text: '______ with the largest alphabet is Cambodian, with 74 letters.',
        options: [
          { label: 'A', text: 'In the language' },
          { label: 'B', text: 'The language is' },
          { label: 'C', text: 'The language' },
          { label: 'D', text: 'About the language' },
        ],
        answer: 'C',
      },
      {
        id: 3, type: 'structure',
        text: '______ given to the various types of microscopic plants and animals found in water.',
        options: [
          { label: 'A', text: 'Named plankton' },
          { label: 'B', text: 'The name of plankton' },
          { label: 'C', text: 'Plankton\'s name' },
          { label: 'D', text: 'Plankton is the name' },
        ],
        answer: 'D',
      },
      {
        id: 4, type: 'structure',
        text: 'Charles Babbage (1792–1871) drew up the first plans for a programmable digital computer in 1834, but ______ was never completed.',
        options: [
          { label: 'A', text: 'his invention' },
          { label: 'B', text: 'he invented' },
          { label: 'C', text: 'to invent him' },
          { label: 'D', text: 'for him to invent' },
        ],
        answer: 'A',
      },
      {
        id: 5, type: 'structure',
        text: '______, one of the oldest forms of written communication, was used as early as 3000 B.C.',
        options: [
          { label: 'A', text: 'Cuneiform writing' },
          { label: 'B', text: 'In cuneiform writing' },
          { label: 'C', text: 'Cuneiform writing was' },
          { label: 'D', text: 'When cuneiform writing' },
        ],
        answer: 'A',
      },
      {
        id: 6, type: 'structure',
        text: 'As a protection device, an octopus ejects black or purple ink to cloud the water when ______.',
        options: [
          { label: 'A', text: 'does it escape' },
          { label: 'B', text: 'its escape' },
          { label: 'C', text: 'it escapes' },
          { label: 'D', text: 'escapes it' },
        ],
        answer: 'C',
      },
      {
        id: 7, type: 'structure',
        text: '______ manipulate with their feet as well as with their hands, it is difficult for them to stand upright.',
        options: [
          { label: 'A', text: 'Apes can, however,' },
          { label: 'B', text: 'Apes are able to' },
          { label: 'C', text: 'Despite the ability of apes' },
          { label: 'D', text: 'Although apes can' },
        ],
        answer: 'D',
      },
      {
        id: 8, type: 'structure',
        text: 'Approximately 500 varieties of insectivorous plants, which trap animals for their sustenance, ______ in the world.',
        options: [
          { label: 'A', text: 'and their existence' },
          { label: 'B', text: 'exist' },
          { label: 'C', text: 'they exist' },
          { label: 'D', text: 'that exist' },
        ],
        answer: 'B',
      },
      {
        id: 9, type: 'structure',
        text: 'Ozone is formed when ultraviolet radiation from the Sun ______ molecules into highly reactive oxygen atoms.',
        options: [
          { label: 'A', text: 'oxygen breaks up' },
          { label: 'B', text: 'oxygen is broken up' },
          { label: 'C', text: 'breaks up oxygen' },
          { label: 'D', text: 'to break up oxygen' },
        ],
        answer: 'C',
      },
      {
        id: 10, type: 'structure',
        text: 'The surrealistic movement in art in the 1920s and 1930s placed ______ is pictured in the unconscious and often incorporated dreamlike images.',
        options: [
          { label: 'A', text: 'to emphasize it' },
          { label: 'B', text: 'an emphasis on it' },
          { label: 'C', text: 'emphasize what' },
          { label: 'D', text: 'an emphasis on what' },
        ],
        answer: 'D',
      },
      {
        id: 11, type: 'structure',
        text: 'Today used to measure the weight of gemstones or the amount of gold per 24 parts of pure gold, ______ originally the weight of a seed of the carob tree.',
        options: [
          { label: 'A', text: 'was a carat' },
          { label: 'B', text: 'a carat was' },
          { label: 'C', text: 'which was a carat' },
          { label: 'D', text: 'that a carat was' },
        ],
        answer: 'B',
      },
      {
        id: 12, type: 'structure',
        text: 'The film Lawrence of Arabia is three hours and forty-one minutes long, one minute ______ Gone with the Wind.',
        options: [
          { label: 'A', text: 'in length like' },
          { label: 'B', text: 'long is' },
          { label: 'C', text: 'is longer than' },
          { label: 'D', text: 'longer than is' },
        ],
        answer: 'D',
      },
      {
        id: 13, type: 'structure',
        text: 'The genus Equus became extinct in North America during the glacial period, and it was not reintroduced until ______ by the Spaniards.',
        options: [
          { label: 'A', text: 'brought there' },
          { label: 'B', text: 'was brought there' },
          { label: 'C', text: 'bringing it there' },
          { label: 'D', text: 'it brought there' },
        ],
        answer: 'A',
      },
      {
        id: 14, type: 'structure',
        text: 'In ______ several vertically aligned honeycombs with hexagonal wax cells stacked close together.',
        options: [
          { label: 'A', text: 'a honeybee hive is' },
          { label: 'B', text: 'a honeybee hive are' },
          { label: 'C', text: 'a honeybee hive of' },
          { label: 'D', text: 'a honeybee hive composed of' },
        ],
        answer: 'B',
      },
      {
        id: 15, type: 'structure',
        text: 'The shapes of snow crystals depend largely ______ temperature and humidity are.',
        options: [
          { label: 'A', text: 'how high its' },
          { label: 'B', text: 'on the height of the' },
          { label: 'C', text: 'on how high the' },
          { label: 'D', text: 'that the height of the' },
        ],
        answer: 'C',
      },
      // ── WRITTEN EXPRESSION (Q16–25 only) ────────────────────────
      {
        id: 16, type: 'written_expression',
        segments: [t('The price of silver '), o('A','rose'), t(' to '), o('B','$50.05'), t(' per troy ounce in January 1980 '), o('C','and then fell'), t(' to $10.80 two '), o('D','month'), t(' later.')],
        answer: 'D', correction: 'months',
      },
      {
        id: 17, type: 'written_expression',
        segments: [t('Most polar seals '), o('A','retreat'), t(' to open water during the winter, but a few types have '), o('B','learn'), t(' to survive on and under the ice all year '), o('C','round'), t(' '), o('D','—'), t('.')],
        answer: 'B', correction: 'learned',
      },
      {
        id: 18, type: 'written_expression',
        segments: [o('A','More than'), t(' half of all stars '), o('B','is'), t(' in '), o('C','binary'), t(' or multiple-star '), o('D','systems'), t('.')],
        answer: 'C', correction: '——',
      },
      {
        id: 19, type: 'written_expression',
        segments: [t('The harpsichord is '), o('A','the most'), t(' '), o('B','complex'), t(' and '), o('C','most large'), t(' of all the '), o('D','plucked'), t(' keyboard instruments.')],
        answer: 'C', correction: 'largest',
      },
      {
        id: 20, type: 'written_expression',
        segments: [t('United States '), o('A','forces'), t(' '), o('B','won'), t(' the city of Los Angeles in 1847 '), o('C','during'), t(' the Mexican War and '), o('D','gain'), t(' all of California in the same year.')],
        answer: 'D', correction: 'gained',
      },
      {
        id: 21, type: 'written_expression',
        segments: [o('A','During'), t(' fermentation, complex carbohydrates '), o('B','are converted'), t(' to '), o('C','another'), t(' chemicals by the action of enzymes '), o('D','produced'), t(' by molds, yeasts, or bacteria.')],
        answer: 'C', correction: 'other',
      },
      {
        id: 22, type: 'written_expression',
        segments: [t('The surface of Mars is very '), o('A','complex'), t(' and '), o('B','consists'), t(' of a mixture of '), o('C','flat'), t(' deserts, craters, volcanoes, and '), o('D','mountainous'), t('.')],
        answer: 'D', correction: 'mountains',
      },
      {
        id: 23, type: 'written_expression',
        segments: [t('Hardwood '), o('A','comes'), t(' from '), o('B','broad-leaved'), t(' deciduous trees, '), o('C','those'), t(' that lose '), o('D','theirs'), t(' leaves in winter.')],
        answer: 'D', correction: 'their',
      },
      {
        id: 24, type: 'written_expression',
        segments: [t('The Washington '), o('A','quarter'), t(' was '), o('B','first'), t(' '), o('C','minting'), t(' by the U.S. government in 1932 on the 200th '), o('D','anniversary'), t(" of George Washington's birth.")],
        answer: 'C', correction: 'minted',
      },
      {
        id: 25, type: 'written_expression',
        segments: [t("W. Somerset Maugham's "), o('A','best-known'), t(' novel, Of Human Bondage, is a '), o('B','partially'), t(' fictionalized account '), o('C','of'), t(' a '), o('D','unhappy'), t(' youth.')],
        answer: 'C', correction: 'of an',
      },
    ],
  },

  4: {
    id: 4,
    title: 'Complete Test Four',
    questions: [
      // ── STRUCTURE ───────────────────────────────────────────────
      {
        id: 1, type: 'structure',
        text: "Indiana's Lost River ______ underground for a distance of 22 miles.",
        options: [
          { label: 'A', text: 'travels' },
          { label: 'B', text: 'traveling' },
          { label: 'C', text: 'to travel' },
          { label: 'D', text: 'it travels' },
        ],
        answer: 'A',
      },
      {
        id: 2, type: 'structure',
        text: 'The 1980 explosion of ______ the first volcanic eruption in the continental United States in over 60 years.',
        options: [
          { label: 'A', text: 'Mount St. Helens' },
          { label: 'B', text: 'was Mount St. Helens' },
          { label: 'C', text: 'it was Mount St. Helens' },
          { label: 'D', text: 'Mount St. Helens was' },
        ],
        answer: 'D',
      },
      {
        id: 3, type: 'structure',
        text: 'Static electricity ______ one cloud to another or between clouds and the ground creates lightning.',
        options: [
          { label: 'A', text: 'flows from' },
          { label: 'B', text: 'the flow from' },
          { label: 'C', text: 'flowing from' },
          { label: 'D', text: 'is flowing from' },
        ],
        answer: 'C',
      },
      {
        id: 4, type: 'structure',
        text: 'The Model T car, introduced in 1908, ______ $850.',
        options: [
          { label: 'A', text: 'the price was' },
          { label: 'B', text: 'a price of' },
          { label: 'C', text: 'to be priced at' },
          { label: 'D', text: 'was priced at' },
        ],
        answer: 'D',
      },
      {
        id: 5, type: 'structure',
        text: '______ reacts with a chlorine atom, an electron is transferred from the outer shell of the sodium atom to the outer shell of the chlorine atom.',
        options: [
          { label: 'A', text: 'A sodium atom' },
          { label: 'B', text: 'When a sodium atom' },
          { label: 'C', text: 'For a sodium atom' },
          { label: 'D', text: 'It is a sodium atom' },
        ],
        answer: 'B',
      },
      {
        id: 6, type: 'structure',
        text: 'In 1858, the site ______ was to become the city of Denver was settled as a way station for outfitting gold prospectors.',
        options: [
          { label: 'A', text: 'it' },
          { label: 'B', text: 'of it' },
          { label: 'C', text: 'what' },
          { label: 'D', text: 'of what' },
        ],
        answer: 'D',
      },
      {
        id: 7, type: 'structure',
        text: 'The light from an electrical lamp includes many different wavelengths, ______ in a laser is concentrated on only one wavelength.',
        options: [
          { label: 'A', text: 'all the energy' },
          { label: 'B', text: 'it is all the energy' },
          { label: 'C', text: 'while all the energy' },
          { label: 'D', text: 'while all the energy is' },
        ],
        answer: 'D',
      },
      {
        id: 8, type: 'structure',
        text: 'In the Antarctic Ocean ______ plankton and crustacean forms of life.',
        options: [
          { label: 'A', text: 'an abundance of' },
          { label: 'B', text: 'is an abundance of' },
          { label: 'C', text: 'it is abundant' },
          { label: 'D', text: 'an abundance is' },
        ],
        answer: 'B',
      },
      {
        id: 9, type: 'structure',
        text: 'Flintlock muskets ______ sharp bayonets were standard weapons during the American Revolution.',
        options: [
          { label: 'A', text: 'tip with' },
          { label: 'B', text: 'tipped with' },
          { label: 'C', text: 'the tips of' },
          { label: 'D', text: 'were tipped with' },
        ],
        answer: 'B',
      },
      {
        id: 10, type: 'structure',
        text: 'Benjamin Franklin believed that the turkey rather than the eagle ______ of the United States.',
        options: [
          { label: 'A', text: 'should become the symbol' },
          { label: 'B', text: 'the symbol becomes' },
          { label: 'C', text: 'should symbolize becoming' },
          { label: 'D', text: 'becoming the symbol' },
        ],
        answer: 'A',
      },
      {
        id: 11, type: 'structure',
        text: "______ to occur in the Earth's crust, push-pull and shake waves would be generated simultaneously.",
        options: [
          { label: 'A', text: 'Were a break' },
          { label: 'B', text: 'If a break' },
          { label: 'C', text: 'A break was' },
          { label: 'D', text: 'If broken' },
        ],
        answer: 'A',
      },
      {
        id: 12, type: 'structure',
        text: 'Fossil fuels like coal, oil, and gas produce carbon dioxide when ______.',
        options: [
          { label: 'A', text: 'are burned' },
          { label: 'B', text: 'they burned' },
          { label: 'C', text: 'burned' },
          { label: 'D', text: 'are they burned' },
        ],
        answer: 'C',
      },
      {
        id: 13, type: 'structure',
        text: 'Not until Nellie Tayloe Ross was elected governor of Wyoming in 1924 ______ as governor of a U.S. state.',
        options: [
          { label: 'A', text: 'a woman served' },
          { label: 'B', text: 'a woman serving' },
          { label: 'C', text: 'to serve a woman' },
          { label: 'D', text: 'did a woman serve' },
        ],
        answer: 'D',
      },
      {
        id: 14, type: 'structure',
        text: 'The temperatures ______ take place vary widely for different materials.',
        options: [
          { label: 'A', text: 'which melting and freezing' },
          { label: 'B', text: 'at which melting and freezing' },
          { label: 'C', text: 'which they melt and freeze' },
          { label: 'D', text: 'at which they melt and freeze' },
        ],
        answer: 'B',
      },
      {
        id: 15, type: 'structure',
        text: 'In general, the cells of large animals and plants are only slightly larger than ______ plants and animals.',
        options: [
          { label: 'A', text: 'smaller' },
          { label: 'B', text: 'are smaller' },
          { label: 'C', text: 'those smaller' },
          { label: 'D', text: 'are those of smaller' },
        ],
        answer: 'C',
      },
      // ── WRITTEN EXPRESSION ──────────────────────────────────────
      {
        id: 16, type: 'written_expression',
        segments: [t('The music on '), o('A','a'), t(' compact disk (CD) is '), o('B','record'), t(' '), o('C','by'), t(' '), o('D','lasers'), t('.')],
        answer: 'C', correction: 'recorded',
      },
      {
        id: 17, type: 'written_expression',
        segments: [t('Alaska has more active glaciers '), o('A','as'), t(' '), o('B','the rest'), t(' of the '), o('C','inhabited'), t(' world '), o('D','combined'), t('.')],
        answer: 'A', correction: 'than',
      },
      {
        id: 18, type: 'written_expression',
        segments: [t('Aristotle '), o('A','believed'), t(' that everything in the universe '), o('B','were'), t(' composed of four '), o('C','basic'), t(' elements: earth, water, air, and '), o('D','fire'), t('.')],
        answer: 'B', correction: 'was',
      },
      {
        id: 19, type: 'written_expression',
        segments: [t('In '), o('A','the'), t(' cold climate of the far north, '), o('B','mosquito'), t(' eggs may '), o('C','remains'), t(' '), o('D','dormant'), t(' from autumn until late June.')],
        answer: 'C', correction: 'remain',
      },
      {
        id: 20, type: 'written_expression',
        segments: [o('A','Passengers'), t(' '), o('B','have'), t(' ridden the first Ferris '), o('C','wheel'), t(' at the Columbian Exposition in '), o('D','Chicago'), t(' in 1893.')],
        answer: 'B', correction: 'rode',
      },
      {
        id: 21, type: 'written_expression',
        segments: [t('One type of Australian frog '), o('A','lays'), t(' up to 25 eggs '), o('B','at a time'), t(' and then swallows '), o('C','they'), t(' for '), o('D','protection'), t('.')],
        answer: 'C', correction: 'them',
      },
      {
        id: 22, type: 'written_expression',
        segments: [t('The Cro-Magnons entered the area '), o('A','that is'), t(' today Europe and '), o('B','quickly'), t(' eliminated or absorbed '), o('C','theirs'), t(' Neanderthal '), o('D','predecessors'), t('.')],
        answer: 'C', correction: 'their',
      },
      {
        id: 23, type: 'written_expression',
        segments: [t('The Spanish '), o('A','introduced'), t(' not only horses '), o('B','and'), t(' also '), o('C','cattle'), t(' to the North American '), o('D','continent'), t('.')],
        answer: 'B', correction: 'but',
      },
      {
        id: 24, type: 'written_expression',
        segments: [t('The '), o('A','best-known'), t(' members of the cabbage vegetable '), o('B','group'), t(' '), o('C','includes'), t(' head '), o('D','cabbage'), t(', cauliflower, broccoli, kale, collard, and brussels sprouts.')],
        answer: 'C', correction: 'include',
      },
      {
        id: 25, type: 'written_expression',
        segments: [t('White blood cells '), o('A','are'), t(' '), o('B','the largest'), t(' of red blood cells and are '), o('C','more varied'), t(' in size and in '), o('D','shape'), t('.')],
        answer: 'B', correction: 'larger than',
      },
      {
        id: 26, type: 'written_expression',
        segments: [o('A','An'), t(' hiccup is a '), o('B','spasmodic'), t(' contraction of the diaphragm, '), o('C','which'), t(' leads to a massive '), o('D','intake'), t(' of air.')],
        answer: 'A', correction: 'A',
      },
      {
        id: 27, type: 'written_expression',
        segments: [t('To make a lithograph, an artist '), o('A','used'), t(' a flat stone of '), o('B','a kind'), t(' that '), o('C','will soak'), t(' up oil and '), o('D','water'), t('.')],
        answer: 'A', correction: 'uses',
      },
      {
        id: 28, type: 'written_expression',
        segments: [o('A','Alike'), t(' a bar '), o('B','magnet'), t(', the Earth has two '), o('C','magnetic'), t(' '), o('D','poles'), t('.')],
        answer: 'A', correction: 'Like',
      },
      {
        id: 29, type: 'written_expression',
        segments: [t('Not '), o('A','until'), t(' Harvard College was '), o('B','founded'), t(' in 1636 '), o('C','was'), t(' there '), o('D','any'), t(' colleges in America.')],
        answer: 'C', correction: 'were',
      },
      {
        id: 30, type: 'written_expression',
        segments: [t('Antelopes are '), o('A','gregarious'), t(' animals that travel in herds, ranging in '), o('B','amount'), t(' from '), o('C','a few'), t(' to several '), o('D','thousand'), t('.')],
        answer: 'B', correction: 'number',
      },
      {
        id: 31, type: 'written_expression',
        segments: [t('A '), o('A','supersonic'), t(' airplane can '), o('B','fly'), t(' faster '), o('C','than'), t(' '), o('D','a'), t(' speed of sound.')],
        answer: 'D', correction: 'the',
      },
      {
        id: 32, type: 'written_expression',
        segments: [o('A','In 1821'), t(', Emma Willard '), o('B','opened'), t(' officially the doors of the first school in the United States '), o('C','to offer'), t(' college-level courses '), o('D','for'), t(' women.')],
        answer: 'B', correction: 'officially opened',
      },
      {
        id: 33, type: 'written_expression',
        segments: [t('The first '), o('A','gummed'), t(' postage '), o('B','stamps'), t(' '), o('C','issued'), t(' in New York City '), o('D','in'), t(' 1842.')],
        answer: 'C', correction: 'were issued',
      },
      {
        id: 34, type: 'written_expression',
        segments: [o('A','Typical'), t(' long bone '), o('B','such as'), t(' the femur '), o('C','consists'), t(' of a long shaft with '), o('D','swellings'), t(' at each end.')],
        answer: 'A', correction: 'A typical',
      },
      {
        id: 35, type: 'written_expression',
        segments: [t('The common octopus lives '), o('A','lone'), t(' in a den '), o('B','just'), t(' '), o('C','big enough'), t(' for '), o('D','its'), t(' body.')],
        answer: 'A', correction: 'alone',
      },
      {
        id: 36, type: 'written_expression',
        segments: [o('A','The'), t(' vacuum tube '), o('B','did'), t(' an '), o('C','important'), t(' contribution to the early '), o('D','growth'), t(' of radio and television.')],
        answer: 'B', correction: 'made',
      },
      {
        id: 37, type: 'written_expression',
        segments: [t('St. Augustine, Florida, '), o('A','founded'), t(' in 1565 '), o('B','by'), t(' Pedro Menendez, was '), o('C','razing'), t(' 21 years '), o('D','later'), t(' by Francis Drake.')],
        answer: 'C', correction: 'razed',
      },
      {
        id: 38, type: 'written_expression',
        segments: [t('A '), o('A','bimetallic'), t(' thermometer '), o('B','relies'), t(' the different '), o('C','rates'), t(' of expansion of two types of metal, '), o('D','usually'), t(' brass and copper.')],
        answer: 'B', correction: 'relies on',
      },
      {
        id: 39, type: 'written_expression',
        segments: [t('An ice '), o('A','crystal'), t(' is the '), o('B','nuclei'), t(' '), o('C','on which'), t(' a hailstone is '), o('D','built'), t('.')],
        answer: 'B', correction: 'nucleus',
      },
      {
        id: 40, type: 'written_expression',
        segments: [t('Tremendous '), o('A','flooding'), t(' during the summer of 1993 '), o('B','left'), t(' 8 million acres of nine midwestern states inundated and proved both '), o('C','expensively'), t(' and '), o('D','deadly'), t('.')],
        answer: 'C', correction: 'expensive',
      },
    ],
  },

  5: {
    id: 5,
    title: 'Complete Test Five',
    questions: [
      // ── STRUCTURE ───────────────────────────────────────────────
      {
        id: 1, type: 'structure',
        text: 'Different hormones ______ at the same time on a particular target tissue.',
        options: [
          { label: 'A', text: 'usually act' },
          { label: 'B', text: 'usually acting' },
          { label: 'C', text: 'they usual act' },
          { label: 'D', text: 'the usual action' },
        ],
        answer: 'A',
      },
      {
        id: 2, type: 'structure',
        text: 'The tidal forces on the Earth due to ______ only 0.46 of those due to the Moon.',
        options: [
          { label: 'A', text: 'the Sun is' },
          { label: 'B', text: 'the Sun they are' },
          { label: 'C', text: 'the Sun it is' },
          { label: 'D', text: 'the Sun are' },
        ],
        answer: 'D',
      },
      {
        id: 3, type: 'structure',
        text: 'Most radioactive elements occur in igneous and metamorphic ______ fossils occur in sedimentary rocks.',
        options: [
          { label: 'A', text: 'rocks, nearly all' },
          { label: 'B', text: 'rocks, but nearly all' },
          { label: 'C', text: 'rocks, nearly all are' },
          { label: 'D', text: 'rocks, which nearly all are' },
        ],
        answer: 'B',
      },
      {
        id: 4, type: 'structure',
        text: '______ radioisotope is encountered, the first step in its identification is the determination of its half-life.',
        options: [
          { label: 'A', text: 'An unknown' },
          { label: 'B', text: 'Afterwards, an unknown' },
          { label: 'C', text: 'When an unknown' },
          { label: 'D', text: 'During an unknown' },
        ],
        answer: 'C',
      },
      {
        id: 5, type: 'structure',
        text: 'The Missouri ______ longest river in the United States, flows through seven states from its source in Montana to its confluence with the Mississippi.',
        options: [
          { label: 'A', text: 'River, the' },
          { label: 'B', text: 'River is the' },
          { label: 'C', text: 'River is one of the' },
          { label: 'D', text: 'River, one of the' },
        ],
        answer: 'A',
      },
      {
        id: 6, type: 'structure',
        text: 'Coral islands such as the Maldives are the tips of reefs built during periods of warm climate, when ______ higher.',
        options: [
          { label: 'A', text: 'were sea levels' },
          { label: 'B', text: 'sea had levels' },
          { label: 'C', text: 'having sea levels' },
          { label: 'D', text: 'sea levels were' },
        ],
        answer: 'D',
      },
      {
        id: 7, type: 'structure',
        text: 'Hail forms within large, dense cumulonimbus ______ develop on hot, humid summer days.',
        options: [
          { label: 'A', text: 'clouds' },
          { label: 'B', text: 'clouds that' },
          { label: 'C', text: 'clouds that are' },
          { label: 'D', text: 'clouds that they' },
        ],
        answer: 'B',
      },
      {
        id: 8, type: 'structure',
        text: 'Measles is a highly contagious viral disease ______ by a characteristic skin rash.',
        options: [
          { label: 'A', text: 'accompany' },
          { label: 'B', text: 'is accompanied' },
          { label: 'C', text: 'accompanied' },
          { label: 'D', text: 'it is accompanied' },
        ],
        answer: 'C',
      },
      {
        id: 9, type: 'structure',
        text: "Charles Darwin's first scientific book, published in 1842, ______ a since substantiated theory on the origin of coral reefs and atolls.",
        options: [
          { label: 'A', text: 'to present' },
          { label: 'B', text: 'presented' },
          { label: 'C', text: 'presenting' },
          { label: 'D', text: 'it presents' },
        ],
        answer: 'B',
      },
      {
        id: 10, type: 'structure',
        text: 'Phytoplanktons thrive where ______ phosphorus into the upper layers of a body of water.',
        options: [
          { label: 'A', text: 'upwelling currents circulate' },
          { label: 'B', text: 'the circulation of upwelling currents' },
          { label: 'C', text: 'are upwelling currents' },
          { label: 'D', text: 'circulates upwelling currents' },
        ],
        answer: 'A',
      },
      {
        id: 11, type: 'structure',
        text: 'By the end of 1609, Galileo had a 20-power telescope that enabled him to see ______ planets revolving around Jupiter.',
        options: [
          { label: 'A', text: 'the call' },
          { label: 'B', text: 'he called' },
          { label: 'C', text: 'to call him' },
          { label: 'D', text: 'what he called' },
        ],
        answer: 'D',
      },
      {
        id: 12, type: 'structure',
        text: 'On every continent except Antarctica ______ more than 30,000 species of spiders.',
        options: [
          { label: 'A', text: 'some are' },
          { label: 'B', text: 'some of the' },
          { label: 'C', text: 'are some of the' },
          { label: 'D', text: 'is some' },
        ],
        answer: 'C',
      },
      {
        id: 13, type: 'structure',
        text: 'Many bugs possess defensive scent glands and emit disagreeable odors when ______.',
        options: [
          { label: 'A', text: 'disturbed' },
          { label: 'B', text: 'are disturbed' },
          { label: 'C', text: 'they disturbed' },
          { label: 'D', text: 'are they disturbed' },
        ],
        answer: 'A',
      },
      {
        id: 14, type: 'structure',
        text: 'Hurricanes move with the large-scale wind currents ______ are imbedded.',
        options: [
          { label: 'A', text: 'that they' },
          { label: 'B', text: 'which they' },
          { label: 'C', text: 'in that they' },
          { label: 'D', text: 'in which they' },
        ],
        answer: 'D',
      },
      {
        id: 15, type: 'structure',
        text: "______ the Earth's ice to melt, the Earth's oceans would rise by about two hundred feet.",
        options: [
          { label: 'A', text: 'If all' },
          { label: 'B', text: 'Were all' },
          { label: 'C', text: 'If all were' },
          { label: 'D', text: 'All was' },
        ],
        answer: 'B',
      },
      // ── WRITTEN EXPRESSION ──────────────────────────────────────
      {
        id: 16, type: 'written_expression',
        segments: [t('The '), o('A','brilliantly'), t(' colored rhinoceros viper '), o('B','has'), t(' two or three '), o('C','horns'), t(' above each '), o('D','nostrils'), t('.')],
        answer: 'D', correction: 'nostril',
      },
      {
        id: 17, type: 'written_expression',
        segments: [t('Most of the '), o('A','outer'), t(' planets '), o('B','has'), t(' large swarms of satellites '), o('C','surrounding'), t(' '), o('D','them'), t('.')],
        answer: 'B', correction: 'have',
      },
      {
        id: 18, type: 'written_expression',
        segments: [t('Historical records '), o('A','show'), t(' that Halley\'s comet has '), o('B','return'), t(' '), o('C','about'), t(' every seventy-six years for the '), o('D','past'), t(' 2,000 years.')],
        answer: 'B', correction: 'returned',
      },
      {
        id: 19, type: 'written_expression',
        segments: [t('Robert Heinlein was '), o('A','instrumental'), t(' in '), o('B','popularizing'), t(' science fiction with a '), o('C','series'), t(' of stories that '), o('D','is'), t(' first published in the Saturday Evening Post.')],
        answer: 'D', correction: 'was',
      },
      {
        id: 20, type: 'written_expression',
        segments: [t('Each '), o('A','number'), t(' on the Richter scale '), o('B','represent'), t(' a tenfold increase in the amplitude of waves of '), o('C','ground motion'), t(' '), o('D','recorded'), t(' during an earthquake.')],
        answer: 'B', correction: 'represents',
      },
      {
        id: 21, type: 'written_expression',
        segments: [t('Lake Tahoe, '), o('A','located'), t(' on the '), o('B','eastern'), t(' edge of the Sierra Nevada range, is '), o('C','feed'), t(' by more than thirty mountain '), o('D','streams'), t('.')],
        answer: 'C', correction: 'fed',
      },
      {
        id: 22, type: 'written_expression',
        segments: [o('A','Established'), t(' in 1789 and operated by the Jesuits, Georgetown University in Washington, D.C. is the '), o('B','older'), t(' Roman Catholic institution '), o('C','of higher'), t(' learning '), o('D','in the'), t(' United States.')],
        answer: 'B', correction: 'oldest',
      },
      {
        id: 23, type: 'written_expression',
        segments: [t('The surface of the planet Venus is '), o('A','almost'), t(' completely '), o('B','hid'), t(' by the '), o('C','thick'), t(' clouds that '), o('D','shroud'), t(' it.')],
        answer: 'B', correction: 'hidden',
      },
      {
        id: 24, type: 'written_expression',
        segments: [o('A','Present'), t(' in rocks of '), o('B','all'), t(' types, hematite is '), o('C','particular'), t(' abundant in the sedimentary rocks '), o('D','known'), t(' as red beds.')],
        answer: 'C', correction: 'particularly',
      },
      {
        id: 25, type: 'written_expression',
        segments: [t('Tropical cyclones, '), o('A','alike'), t(' extratropical cyclones, '), o('B','which'), t(' derive much of '), o('C','their'), t(' energy from the jet stream, originate '), o('D','far from'), t(' the polar front.')],
        answer: 'A', correction: 'like',
      },
      {
        id: 26, type: 'written_expression',
        segments: [t('Elizabeth Cady Stanton organized the first U.S. '), o('A',"women's"), t(' '), o('B','rights'), t(' convention in 1848 and was '), o('C','instrumentally'), t(' in the struggle to win '), o('D','voting'), t(' and property rights for women.')],
        answer: 'C', correction: 'instrumental',
      },
      {
        id: 27, type: 'written_expression',
        segments: [t('Jaguarundis are sleek, '), o('A','long-tailed'), t(' creatures '), o('B','colored'), t(' either '), o('C','an'), t(' uniform reddish brown or '), o('D','dark'), t(' grey.')],
        answer: 'C', correction: 'a',
      },
      {
        id: 28, type: 'written_expression',
        segments: [t('It is possible '), o('A','to get'), t(' a sunburn on a '), o('B','cloudy'), t(' day because eighty percent of the ultraviolet rays from the Sun '), o('C','would'), t(' penetrate cloud '), o('D','cover'), t('.')],
        answer: 'C', correction: 'will',
      },
      {
        id: 29, type: 'written_expression',
        segments: [t('In 1964, GATT established the International Trade Center in order '), o('A','to assist'), t(' '), o('B','developing'), t(' countries in the '), o('C','promotion'), t(' of '), o('D','its'), t(' exports.')],
        answer: 'D', correction: 'their',
      },
      {
        id: 30, type: 'written_expression',
        segments: [t("Joseph Heller's novel Catch-22 "), o('A','satirizes'), t(' both the '), o('B','horrors'), t(' of war '), o('C','as well as'), t(' the power of modern '), o('D','bureaucratic'), t(' institutions.')],
        answer: 'C', correction: 'and',
      },
      {
        id: 31, type: 'written_expression',
        segments: [t('In Roots, Alex Haley uses '), o('A','fictional'), t(' details to '), o('B','embellish'), t(' a factual '), o('C','histories'), t(' of seven generations of '), o('D','his'), t(' family.')],
        answer: 'C', correction: 'history',
      },
      {
        id: 32, type: 'written_expression',
        segments: [t('The '), o('A','carbon'), t(' atoms of the diamond are '), o('B','so strongly'), t(' bonded that a diamond can only be '), o('C','scratched'), t(' with '), o('D','other'), t(' diamond.')],
        answer: 'D', correction: 'another',
      },
      {
        id: 33, type: 'written_expression',
        segments: [t('Viruses are '), o('A','extremely'), t(' '), o('B','tiny'), t(' parasites that are '), o('C','able'), t(' to reproduce only within the cells of '), o('D','theirs'), t(' hosts.')],
        answer: 'D', correction: 'their',
      },
      {
        id: 34, type: 'written_expression',
        segments: [o('A','During'), t(' the last Ice Age, '), o('B','which'), t(' ended about 10,000 years ago, there was about three '), o('C','times'), t(' '), o('D','more'), t(' ice than is today.')],
        answer: 'D', correction: 'there is',
      },
      {
        id: 35, type: 'written_expression',
        segments: [t('Melons '), o('A','most'), t(' probably originated '), o('B','in'), t(' Persia and were '), o('C','introduced'), t(' the North American continent '), o('D','during'), t(' the sixteenth century.')],
        answer: 'C', correction: 'introduced to',
      },
      {
        id: 36, type: 'written_expression',
        segments: [t('More than 600 '), o('A','million'), t(' individual '), o('B','bacteria'), t(' '), o('C','lives'), t(' on the skin of '), o('D','humans'), t('.')],
        answer: 'C', correction: 'live',
      },
      {
        id: 37, type: 'written_expression',
        segments: [t('The more '), o('A','directly'), t(' overhead the Moon is, the '), o('B','great'), t(' '), o('C','is'), t(' the '), o('D','effect'), t(' that it exhibits on the Earth.')],
        answer: 'B', correction: 'greater',
      },
      {
        id: 38, type: 'written_expression',
        segments: [o('A','As'), t(' the International Dateline at 180 degrees longitude is crossed '), o('B','westerly'), t(', it becomes '), o('C','necessary'), t(' to change the date '), o('D','by moving'), t(' it one day forward.')],
        answer: 'B', correction: 'in a westerly direction',
      },
      {
        id: 39, type: 'written_expression',
        segments: [t("Kilauea's "), o('A','numerous'), t(' eruptions are generally composed '), o('B','in'), t(' molten lava, with '), o('C','little'), t(' escaping gas and '), o('D','few'), t(' explosions.')],
        answer: 'B', correction: 'of',
      },
      {
        id: 40, type: 'written_expression',
        segments: [t('The '), o('A','incubation'), t(' period of tetanus is usually five to ten days, and '), o('B','the most frequently'), t(' '), o('C','occurred'), t(' symptom is jaw '), o('D','stiffness'), t('.')],
        answer: 'C', correction: 'occurring',
      },
    ],
  },
};
