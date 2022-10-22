<div class="container">

    <h1 class="mdc-typography--headline2">Advocates</h1>

    <LayoutGrid>

        {#each data.advocates as advocate}

            <Cell>
                <AdvocateCard advocate={advocate} />
            </Cell>
    
        {/each}
            
        </LayoutGrid>
        
    <Pagination pagination={data.pagination} />

</div>


<script lang="ts">
    import type { PageData } from './$types';

    import Pagination from "$lib/components/Pagination.svelte";
    import AdvocateCard from '$lib/components/AdvocateCard.svelte';

    import LayoutGrid, { Cell } from '@smui/layout-grid';

    export let data: PageData;

</script>