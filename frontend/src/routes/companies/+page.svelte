
<div class="container">
    
    {#each companiesData as data}
        <div class="company-container">
            <CompanyCard company={data} />
        </div>
    {/each}

</div>


<script lang="ts">
    import type { PageData } from "./$types";
	import type ICompany from "$lib/shared/interfaces/Company";

    import LayoutGrid, { Cell } from "@smui/layout-grid";
    import CompanyCard from "$lib/components/CompanyCard.svelte";

    export let data: PageData;

    let companiesData = Object.values(data) as ICompany[];
    companiesData = companiesData.slice(0, 2)
    
</script>


<style>

    .container {
        width: 50%;
        margin: auto;
    }

</style>


