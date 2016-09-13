import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import PokeapiClient from './pokeapiClient/pokeapiClient';
import ThreeNumbersAlways from './ThreeNumbersAlways/ThreeNumbersAlways';


let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  PokeapiClient,
  ThreeNumbersAlways
])
  
.name;

export default commonModule;
