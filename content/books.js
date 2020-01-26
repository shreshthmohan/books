const bookData = {
  "Bill Gates": [
    {
      title: "A Gentleman in Moscow",
      author: "Amor Towles",
      recommendOn: "May 20, 2019",
    },
    {
      title: "An American Marriage",
      author: "Tayari Jones",
      notes: "Recommended by daugther jenn",
      genres: ["fiction"],
    },
    { title: "These Truths", author: "Jill Lepore" },
    { title: "Growth", author: "Vaclav Smil" },
    {
      title: "Prepared: What kids need for a fulfilled life",
      author: "Diane Tavenner",
      recommendedOn: "December 10, 2019",
    },
    {
      title: "The Rosie Project",
      author: "Graeme Simsion",
      recommendedOn: "July 13, 2014",
    },
    {
      title: "Educated: A memoir",
      author: "Tara Westover",
      recommendedOn: "December 03, 2018",
    },
    {
      title: "Upheaval",
      author: "Jared Diamond",
      recommendedOn: "May 20, 2019",
    },
    {
      title:
        "The World Until Yesterday: What Can We Learn From Traditional Societies?",
      author: "Jared Diamond",
    },

    {
      title: "The Vital Question",
      author: "Nick Lane",
      recommendedOn: "April 27, 2016",
      reviewURL: "https://www.gatesnotes.com/Books/The-Vital-Question",
    },
    {
      title:
        "The Box: How the Shipping Container Made the World Smaller and the World Economy Bigger",
      author: "Marc Levinson",
      published: "2008",
      recommendedOn: "July 09, 2013",
    },
    {
      title:
        "However Long the Night: Molly Melching's Journey to Help Millions of African Women and Girls",
      author: "Aimee Molloy",
      published: "2013",
      recommendedON: "July 09, 2013",
    },
    {
      title:
        "How Children Succeed: Grit, Curiosity, and the Hidden Power of Character",
      author: "Paul Tough",
      published: "2013",
      recommendedOn: "July 09, 2013",
    },
    {
      title:
        "Japan's Dietary Transition and Its Impacts Food, Health, and the Environment",
      authors: ["Vaclav Smil", "Kazuhiko Kobayashi"],
      published: "2012",
      recommendation: "July 09, 2013",
    },
    {
      title: "Made in the USA: The Rise and Retreat of American Manufacturing",
      author: "Vaclav Smil",
      published: "2013",
      recommendedOn: "July 09, 2013",
    },
    {
      title:
        "Whistling Vivaldi: How Stereotypes Affect Us and What We Can Do Issues of Our Time",
      author: "Claude Steele",
      published: "2011",
      recommendedOn: "July 09, 2013",
    },
    {
      title: "Patriot and Assassin",
      author: "Robert Cook",
      published: "2013",
      recommendedOn: "July 09, 2013",
    },
    {
      title: "Steven Pinker’s The Better Angels of our Nature.",
      author: "Steven Pinker",
      recommendedOn: "June 18, 2012",
    },
    {
      title: "The Quest",
      author: "Daniel Yergin",
      recommendedOn: "May 17, 2012",
    },
    {
      title: "Deng Xiaoping and the Transformation of China",
      author: "Ezra Vogel",
      recommendedOn: "December 13, 2012",
    },
    {
      title: "The Cost of Hope",
      author: "Amanda Bennett",
      recommendedOn: "August 28, 2012",
    },
    {
      title: "Behind the Beautiful Forevers",
      author: "Katherine Boo",
      recommendedOn: "May 31, 2012",
    },
    {
      title: "Limits to Growth: The 30-Year Update",
      author: "Donella Meadows",
      recommendedOn: "July 05, 2012",
    },
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      recommendedOn: "July 05, 2012",
    },
    {
      title: "The Man Who Stayed Behind",
      author: "Amanda Bennett",
      recommendedOn: "July 05, 2012",
    },
    {
      title: "Why We Sleep",
      author: "Matthew Walker",
      recommendedOn: "December 10, 2019",
    },

    {
      title: "The Rosie Project",
      author: "Graeme Simsion",
      recommendedOn: "July 13, 2014",
    },

    {
      title:
        "The Power to Compete: An Economist and an Entrepreneur on Revitalizing Japan in the Global Economy",
      authors: ["Ryoichi Mikitani", "Hiroshi Mikitani"],
    },
  ],
  "Jared Diamond": [
    {
      title:
        "Child of the Jungle: The True Story of a Girl Caught Between Two Worlds",
      author: "Sabine Kuegler",
    },
    {
      title: "If This Is a Man",
      author: "Primo Levi",
    },
    {
      title:
        "The Measure of a Nation: How to Regain America’s Competitive Edge and Boost Our Global Standing.",
      author: "Howard Steven Friedman",
    },
    { author: "Niccolò Machiavelli", title: "The Prince." },
  ],
}

const recommenders = Object.keys(bookData)

const newRecObject = {}
let people = []

recommenders.forEach(recr => {
  const recBooks = bookData[recr].map(book => {
    const authors = book.author ? [book.author] : book.authors || []
    people = [...people, ...authors]
    const allBookData = { ...book, authors }
    delete allBookData.author
    return allBookData
  })
  newRecObject[recr] = recBooks
})

const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index
}
people = [...recommenders, ...people]
const uniquePeople = people.filter(onlyUnique)

const peopleWithPhotos = people.map(person => ({ name: person, photo: "" }))

console.log(
  JSON.stringify({ recommenders: newRecObject, people: peopleWithPhotos })
)

// Jim Grant - UNICEF Visionary - Various contributors, edited by Richard Jolly -  February 16, 2011

// https://www.gatesnotes.com/Energy/Important-Books-About-Energy-by-Vaclav-Smil

// https://www.gatesnotes.com/Books/The-Gene

// https://www.gatesnotes.com/Books/Sapiens-A-Brief-History-of-Humankind

// https://www.gatesnotes.com/Books/21-Lessons

// https://www.gatesnotes.com/Books/Homo-Deus

// https://www.gatesnotes.com/Books/How-Not-to-be-Wrong

// “Seveneves”
// By Neal Stephenson

// https://bookauthority.org/profile/bill-gates

// }
