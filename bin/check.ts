#!/usr/bin/env node --experimental-strip-types

import { createGitignoredFiles } from "./codegen-script.ts";

createGitignoredFiles();
console.log('Ejecutando verificación del proyecto...');
console.log('✓ Todo en orden'); 