import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './data.json';

type USERS = typeof Data;

const name: string = "hello";
let name2: string = "good";
name2 = "good by";

const number2:number = 2;

let array2 = [0, 2, "hello2"]

interface NAME {
  first: string;
  last?: string | null;
}

const name4: NAME = {
  first: "yamada",
  last: null
}
  
const abc = (x:number, y:number): number => {
  return x + y;
}

const ans = abc(1, 2);

type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
}

type USER = PROFILE & LOGIN;

const userA:USER = {
  age: 39,
  city: "Tokyo",
  username: "Taro",
  password: "zzxxcc"
}

let value: boolean | number;
value = 10;

let arrayUni: (number | string) [];

arrayUni = [0, "aabbbvv"];

let compay: "Facebook" | "Google" | "Amazon";
compay = "Google";

let memory: 256 | 512;
memory = 256; 

let msg: string = "Hi";
let msg2: typeof msg;

msg2 = "aaa";

let animal = { cat: "small cat" };
let newAnimal: typeof animal = { cat: "big cat" };

type KYES = {
  primary: string;
  secondary: string;
};

let key: keyof KYES
key = "primary";

const SPORTS = {
  soccer: "Soccer",
  bassball: "Baseball"
};

let keySports: keyof typeof SPORTS;

keySports = "soccer";

enum OS {
  Windows,
  Mac,
  Linux
};

interface PC {
  id: number,
  OSType: OS
};

const pc1:PC = {
  id: 1,
  OSType: OS.Windows
};

const pc2:PC = {
  id: 2,
  OSType: OS.Mac
};

const comp1 = "test";
let comp2:string = comp1;

let comp3: string = "test";

let funcComp1 = (x:number) => {};

let funcComp2 = (x:string) => {};

interface GEN<T>{
  item: T;
};

const gen0: GEN<string> = { 
  item: "hello"
};

interface GEN1<T=string>{
  item: T;
};

const gen1: GEN1 = { 
  item: "hello"
};


interface GEN2<T extends string | number>{
  item: T;
};

const gen2: GEN2<number> = { 
  item: 0
};

function funcGen<T>(props: T) {
  return { item: props};
}

const gen3 = funcGen<string>("あああ");
const gen4 = funcGen<string | null >(null);

function funcGen2<T extends string | null>(props: T){
  return { value: props };
}

const gen9 = funcGen2("aaa");

interface Props {
  price: number;
}

function funcGen3<T extends Props>(props: T){
  return{
    value: props.price
  };
}

const gen10 = funcGen3({price:1});

const fucGen4 = <T extends Props>(props: T) => {
  return{
    value: props.price
  };
}

function App(): JSX.Element {
  return (
    <div className="App">
      {//<div>header className="App-header"></header>
      }
      <p>{ msg2 }</p>
    </div>
  );
}

export default App;
