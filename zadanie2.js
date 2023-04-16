console.log("Zadnie 1");

const people = [
  {
    firstName: "Bartolomeo",
    lastName: "Lozano",
  },
  {
    firstName: "Mateo",
    lastName: "Loza",
  },
];

const nickname = (item) => {
  item.map((person) => {
    const nick = person.firstName
      .slice(0, 3)
      .split("")
      .reverse()
      .join("")
      .toLowerCase();

    const nick2 = person.lastName.slice(-3).split("").reverse().join("");

    let nick3 = nick.concat(nick2);
    nick3 = nick3.charAt(0).toUpperCase() + nick3.slice(1);
    console.log(nick3);
    person.nickName = nick3;
  });
  return item;
};

console.log(nickname(people));

console.log("Zadanie 2");

const people2 = [
  {
    firstName: "Bartolomeo",
    lastName: "Lozano",
    nickname: "Rabona",
    introduceYourself: introduceYours,
  },
];

function introduceYours() {
  console.log(
    `Cześć jestem ${this.firstName} ${this.lastName}, ale w szkole mówią na mnie ${this.nickname}`
  );
}

people2[0].introduceYourself();
let witaj = [];
const hello = people2.forEach(function (item) {
  return witaj.push(`Witaj ${item.firstName}`);
});

console.log(witaj);

console.log("Zadanie 3");

const people3 = [
  {
    firstName: "Bartolomeo",
    lastName: "Lozano",
    nickname: "Rabona",
    introduceYourself: getFavouriteColor,
  },
];
const colors = ["red", "green", "yellow", "blue", "pink", "orange"];

function getFavouriteColor(item = 5) {
  if (item < 1) {
    console.log(`podałeś za małą liczbę, liczba nie może być mniejsza niż 1`);
    return;
  } else if (item > 30) {
    console.log(`podałeś za dużą liczbę, liczba nie może być większa niż 30 `);
    return;
  } else {
    const indexName =
      (this.firstName.length +
        this.lastName.length +
        this.nickname.length -
        item) %
      colors.length;
    console.log(colors[indexName]);
  }
}

Object.prototype.getFavouriteColor = getFavouriteColor;
people3.forEach((person) => person.getFavouriteColor(12));

console.log(" Zadanie 4");

function getFavouriteColor2(name, item = 5) {
  if (item < 1) {
    console.log(`podałeś za małą liczbę, liczba nie może być mniejsza niż 1`);
    return;
  } else if (item > 30) {
    console.log(`podałeś za dużą liczbę, liczba nie może być większa niż 30 `);
    return;
  } else {
    for (let likeColor of name) {
      const indexName =
        (likeColor.firstName.length +
          likeColor.lastName.length +
          likeColor.nickname.length -
          item) %
        colors.length;
      console.log(likeColor.firstName, colors[indexName]);
    }
  }
}

getFavouriteColor2(people3, 2);

console.log(" Zadanie 5");

console.log("Zadanie 7");
const nestedObject = {
  name: "Kamil",
  children: [
    {
      name: "Zosia",
    },
    {
      name: "Krysia",
      name2: "Barbara",
      children: [
        {
          name: "Basia",
          children: [
            {
              name: "Monika",
              name2: "Viola",
              children: [
                {
                  name: "Mateusz",
                },
                {
                  name: "Sebastian",
                  name2: "August",
                  name3: "Franciszek",
                  children: [
                    { name: "Alex" },
                    { name: "Stasio" },
                    {
                      name: "Paulina",
                      children: [{ name: "Kuba" }, { name: "Kacper" }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

function getAllNames(obj) {
  const names = [];

  if (obj.name) {
    names.push(obj.name);
  }

  if (obj.name2) {
    names[names.length - 1] += ` ${obj.name2}`;
  }

  if (obj.children) {
    obj.children.forEach((child) => {
      names.push(...getAllNames(child));
    });
  }

  return names;
}

const allNames = getAllNames(nestedObject);
console.log(allNames);
