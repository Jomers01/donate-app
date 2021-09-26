GUIA DE ESTILOS:

- funciones normales para los componentes -> function App() {...}
- poner ; en todos ls lugares donde debe ir
- tabs de 2 espacios
- 1 Espacio entre funciones
- dentro de un a funcion ...
    function App() {
      contantes globales
      contextos
      reduxs
      useStates
      UseEfeect

      funciones Handle(hanldesubmit, handleClik)
      funcion de envio (peticiones, editar datos, pedir datos, eliminar)
      otras funciones

      return ()
    }


TODO:
- PARTIR CODIGO EN COMPONENTES
- COMPONENTES COMUNES EN COMMON
- PERFIL COMPLETO CON CRUD
- GOOGLE, FACEBOOK INICIO DE SESION
- COMO PROTEGER CONTRASEÑAS CON HASH (Argon 2 o Bcrypt, NO USAR MD5)
- DISEÑO Y ESTILOS (Arreglar algunos diseños de los componentes)
- VALIDACION DE FORMULARIO (QUE APAREZCA EN ROJO LOS INPUTS SI HAY ERROR, Y QUE APAREZCA MENSAJE SI EL USUARIO ESTÁ EN USO O NO EXISTE)
- agregar que elija el prefijo de numero (input donde va el numero)
- metodologia BEM A CSS
- Señalar funciones candidatas a memorizar
- firestore security
- links a imagenes minix
- USAR FIREBASE_AUTENTICATION para evitar que se vean los usuarios y para recuperar contraseña

- AL HACER EL DEPLOY ELIMINAR EL DOMINIO: LOCALHOST EN FIREBASE (Dejar solo donde va a quedar ublicado)

- QUE PASA CUANDO NO HAY CONEXION ?
- DESHABILITAR BOTONES MIENTRAS AY CARGA (Y QUE APREZCA CARGANDO.....)


- VALIDACION DE TAMAÑO DE CONTRASEÑA
- CAPTURAR TODOS LOS ERRORES DE FIREBASE
- CHAT APP CON FIREBASE
- REGLAS DE SEGURIDAD
- COMO EDITAR LOS DATOS DEL USUARIO (NO PUEDA CAMBIAR NI CORREO NI PASSWORD)
- OBTENER DATOS RELACIONADOS AL USUARI
- RECUPERAR CONTRASEÑA POR CORREO
- NO DEJAR INSCRIBIR A CUALQUIERA (PEDIR -
- VERIFICACION POR CORREO)
- CAMBIAR ENLACE DE CLOUDFIRE
- DEFINIR SI BOOSTRAP O REACT BOOSTAP, 
- QUE TODOS PUEDAN LEER LOS PRODUCTOS 

--------------
- CREAR INSIGNIAS
- Mis Creaciones
- al crear producto se actualicen los datos de las donaciones



- que yo pueda boorar todos las donaciones 
- relaciones a mi ID cuando borre la cienta 
- que me diga cuentas donaciones tengo y cuales osn de hace 30 days

- QUE AL CREAR UNA DONACION ME DE UNA INSIGNIA SI ES EL CASO Y SE SUME LA CANTIDAD DE DONACIONES
- MOSTRAR PRODUCTOS EN INICIO (EN tiempo real)




OBTENER DOCUMENTOS FILTRADOS

import { collection, query, where, getDocs } from "firebase/firestore";

const q = query(collection(db, "cities"), where("userId", "==", AuthContext.user.id));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});