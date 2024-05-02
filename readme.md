# API Endpoints

## Cities (Colección A)

- `GET /cities`
  - Descripción: Devuelve todas las ciudades.
  - Respuesta: Array de ciudades.

- `GET /cities/:id`
  - Descripción: Devuelve una ciudad por su ID.
  - Respuesta: Detalles de la ciudad.

- `POST /cities`
  - Descripción: Crea una nueva ciudad.
  - Cuerpo de la solicitud: Datos de la nueva ciudad.

- `PUT /cities/:id`
  - Descripción: Actualiza los datos de una ciudad existente.
  - Cuerpo de la solicitud: Datos de la ciudad a actualizar.

- `DELETE /cities/:id`
  - Descripción: Elimina una ciudad por su ID.

## Monuments (Colección B)

- `GET /monuments`
  - Descripción: Devuelve todos los monumentos.
  - Respuesta: Array de monumentos.

- `GET /monuments/:id`
  - Descripción: Devuelve una monumento por su ID.
  - Respuesta: Detalles del monumento.

- `POST /monuments`
  - Descripción: Crea una nuevo monumento.
  - Cuerpo de la solicitud: Datos del nuevo monumento.

- `PUT /monuments/:id`
  - Descripción: Actualiza los datos de una monumento existente.
  - Cuerpo de la solicitud: Datos del monumento a actualizar.

- `DELETE /monuments/:id`
  - Descripción: Elimina un monumento por su ID.

## Relaciones

- `GET /cities/:id/monuments`
  - Descripción: Recupera una ciudad y todos los monumentos asociados.

- `GET /monuments/:id/city`
  - Descripción: Recupera un monumento y la ciudad a la que pertenece.

- `PUT /cities/:cityId/monuments/:monumentId`
  - Descripción: Añade(si no esta) o quita(si esta) un monumento del arreglo de una ciudad.

- `PUT /monuments/:monumentId/city/:cityId`
  - Descripción: Cambia o elimina la ciudad a la que un monumento está relacionado.