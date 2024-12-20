/* 
Por qué se suele usar el hook useLocoScrollContext?
Consistencia: Centraliza el acceso al contexto, facilitando cambios futuros.
Validación automática: Puedes lanzar un error si useLocoScrollContext se usa fuera de un proveedor (LocoScrollProvider).
Escalabilidad: Si decides agregar lógica adicional para acceder al contexto, puedes hacerlo fácilmente dentro del hook sin cambiar todos los lugares donde se accede al contexto.
Si crees que estos beneficios no son necesarios en tu caso, el enfoque sin el custom hook es perfectamente válido.
*/
/* 

Hook para acceder al contexto
export const useLocoScrollContext = () => {
  const context = useContext(LocoScrollContext);
  if (!context) {
    throw new Error('useLocoScrollContext debe usarse dentro de LocoScrollProvider');
  }
  return context;
};

*/