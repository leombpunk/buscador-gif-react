Context: ¿qué es?
-es un objeto magico que tiene react
-puede almacenar informacion
-se puede utilizar desde cualquier lugar (todos los componentes)
 sin nececsidad que se le pase por parametro, estado, ni nada
-se puede acceder a él desde cualquier parte de tu arbol de 
 elemntos, desde cualquier sitio
-puede guardar informacion de configuracion
-puede ser un objeto que no cambie nunca
-da la oportunidad de crear estados globales

El contexto tiene dos partes
-un proveedor
-un consumidor

-se define el contexto en un archivo (en este caso es StaticContext)
-se usa este contexto con el hook: useContext -> importado de react 
 y cual es el contexto que queremos consumir -> o sea importar el 
 archivo StaticContext tambien

para este ejemplo la idea es la siguiente:
quiero recuperar un gif que me dio el resultado de la busqueda
y se propone almacenar dicho gif en el objeto magico context