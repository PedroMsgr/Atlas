
# Flujo de Comunicación y Despliegue de Unitarios

## 1. CREACIÓN EN EL ORQUESTADOR
- Se define un nuevo servidor unitario con un nombre y dominio.
- Se generan dos tokens únicos:
  - Token del orquestador (para autenticarse ante el unitario).
  - Token del unitario (para autenticarse ante el orquestador).
- Se guarda una entrada en la base de datos central (UnitServer).

## 2. DESPLIEGUE DEL UNITARIO
- El servidor unitario se despliega (por ejemplo, en Vercel o Netlify).
- Exponer un endpoint o panel /config donde se introducen ambos tokens.
- Se autentica con el orquestador y queda enlazado de forma segura.

## 3. TEST DE CONEXION
- Desde el orquestador se lanza una prueba de comunicación para verificar autenticación bidireccional.

## 4. CREACIÓN DE CONFIGURACIÓN
- El administrador crea formularios con parámetros para generar la landing:
  - Título de página, footer legal, secciones informativas, tipo de constelación.
  - Parámetros para scraping de noticias, enlaces, artículos, etc.
- Esta configuración se guarda con nombre (ej: 'Accidentes Patinete Electrico').

## 5. ENVÍO DE CONFIGURACIÓN AL UNITARIO
- Se selecciona el servidor desde el panel.
- Se le envía un flag de actualización.
- El unitario recibe el aviso y hace una consulta GraphQL para obtener los datos.
- Con esos datos, el unitario genera HTML estático + newsCache.json + config.json local.

## 6. GESTIÓN POSTERIOR
- Las configuraciones pueden sobrescribirse o clonarse.
- Se puede reenviar un flag a un servidor o a varios a la vez.
- En el panel de cada servidor puede cambiarse la configuración activa y forzar actualizaciones.
