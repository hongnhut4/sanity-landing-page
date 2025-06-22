import { type SchemaTypeDefinition } from 'sanity'

import {navigationType} from './navigationType'
import {carouselType} from './carouselType'
import {imageComponentType} from './imageComponentType'
import {textComponentType} from './textComponentType'
import {imageTextComponentType} from './imageTextComponentType'
import {footerType} from './footerType'
import {pageType} from './pageType'
import {aboutMeType} from './aboutMeType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    navigationType, 
    carouselType, 
    imageComponentType, 
    textComponentType, 
    imageTextComponentType, 
    footerType, 
    pageType,
    aboutMeType
  ],
}
