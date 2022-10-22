<div class="container">

    <Pagination pages={data.pagination.pages} currentPage={data.pagination.current_page}>

        {#each data.advocates as advocate}
            <p>{advocate.name}</p>
        {/each}

    </Pagination>

</div>


<script lang="ts">
    import type { PageData } from './$types';

    import Pagination from "$lib/components/Pagination.svelte";

    export let data: PageData;

</script>