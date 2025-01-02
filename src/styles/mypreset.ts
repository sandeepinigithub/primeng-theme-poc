//mypreset.ts
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const MyPreset = definePreset(Aura, {
    //Your customizations, see the following sections for examples
    // semantic: {
    //     primary: {
    //         50: '{indigo.50}',
    //         100: '{indigo.100}',
    //         200: '{indigo.200}',
    //         300: '{indigo.300}',
    //         400: '{indigo.400}',
    //         500: '{indigo.500}',
    //         600: '{indigo.600}',
    //         700: '{indigo.700}',
    //         800: '{indigo.800}',
    //         900: '{indigo.900}',
    //         950: '{indigo.950}'
    //     }
    // }
    // semantic: {
    //     primary: {
    //         50: '{red.50}',
    //         100: '{red.100}',
    //         200: '{red.200}',
    //         300: '{red.300}',
    //         400: '{red.400}',
    //         500: '{red.500}',
    //         600: '{red.600}',
    //         700: '{red.700}',
    //         800: '{red.800}',
    //         900: '{red.900}',
    //         950: '{red.950}'
    //     }
    // }
    semantic: {
        primary: {
            50: '{yellow.50}',
            100: '{yellow.100}',
            200: '{yellow.200}',
            300: '{yellow.300}',
            400: '{yellow.400}',
            500: '{yellow.500}',
            600: '{yellow.600}',
            700: '{yellow.700}',
            800: '{yellow.800}',
            900: '{yellow.900}',
            950: '{yellow.950}'
        }
    }
});

export default MyPreset;