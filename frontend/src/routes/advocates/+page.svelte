<div class="container">

    {#await dataPromise}
        <p>Loading...</p>
    {:then data}
    
        <Pagination pages={data.pagination.pages} currentPage={data.pagination.current_page}>
            {#each data.advocates as advocate }
                <p>{advocate.name}</p>
            {/each}
        </Pagination>

    {/await}

</div>


<script lang="ts">
    import { getAdvocateListPageData } from "$lib/shared/utils/dataRetrive";

    import { page } from "$app/stores";

    import Pagination from "$lib/components/Pagination.svelte";

    const dataPromise = getAdvocateListPageData($page.url.searchParams.get("page") || undefined);
</script>