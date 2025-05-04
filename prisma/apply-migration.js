// Script para ejecutar migraciones en Railway sin advisory locks
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

// Establecer la variable de entorno para ignorar los advisory locks
process.env.PRISMA_MIGRATE_SKIP_GENERATE = 'true';
process.env.PRISMA_SCHEMA_DISABLE_ADVISORY_LOCK = 'true'; 

// Ejecutar la migración
console.log('Aplicando migración sin advisory locks...');

// Obtener el directorio de migraciones
const migrationsDir = path.join(__dirname, 'migrations');

// Comprobar si el directorio existe
if (!fs.existsSync(migrationsDir)) {
  console.error('No se encontraron migraciones. Crea primero las migraciones con --create-only.');
  process.exit(1);
}

// Ejecutar comando de migración
const command = 'npx prisma migrate deploy';
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al ejecutar la migración: ${error.message}`);
    console.error(stderr);
    process.exit(1);
  }
  
  console.log(stdout);
  console.log('Migración aplicada correctamente.');
  
  // Ejecutar seed después de la migración
  console.log('Ejecutando seed...');
  exec('npx prisma db seed', (seedError, seedStdout, seedStderr) => {
    if (seedError) {
      console.error(`Error al ejecutar el seed: ${seedError.message}`);
      console.error(seedStderr);
      process.exit(1);
    }
    
    console.log(seedStdout);
    console.log('Seed ejecutado correctamente.');
  });
});