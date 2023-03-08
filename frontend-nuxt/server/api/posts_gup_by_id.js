export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const query = getQuery(event);
    const id = event.context.params.id;
    console.log(query);
    const res = $fetch('/api/store_gup/', {query: {id: id}});
    return res;
})