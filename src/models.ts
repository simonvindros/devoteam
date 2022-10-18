type Name = {
  title: string;
  first: string;
  last: string;
};

type Street = {
  number: number;
  name: string;
};

type Coordiantes = {
  latitude: string;
  longitude: string;
};

type TimeZone = {
  offset: string;
  description: string;
};

type Location = {
  street: Street;
  city: string;
  state: string;
  postcode: number;
  coordinates: Coordiantes;
  timeZone: TimeZone;
};

type Login = {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
};

type DoB = {
  date: string;
  age: Number;
};

type ID = {
  name: string;
  value: string;
};

type Picture = {
  large: string;
  medium: string;
  thumbnail: string;
};

export type Person = {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: DoB;
  phone: string;
  cell: string;
  id: ID;
  picture: Picture;
  nat: string;
};

export type People = Person[];
