SELECT * FROM categoria;
DELETE FROM categoria WHERE id_categoria = 2;
SHOW TABLES;
DESCRIBE cliente;
DESCRIBE libro;
-- DESCRIBE librosdecliente;
-- TRUNCATE TABLE categoria;

-- ALTER TABLE cliente CHANGE telofono telefono VARCHAR(50); 
ALTER TABLE cliente DROP COLUMN codigo;
ALTER TABLE libro ADD COLUMN codigo BINARY(16);