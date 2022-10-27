<main>

    {#each data.companies as company}
        <div class="company-info-div">
            <CompanyInformation company={company} />
        </div>
    {/each}

</main>


<script lang="ts">
    import type { PageData } from "./$types";

    import CompanyInformation from "$lib/components/CompanyInformation.svelte";

    export let data: PageData;

</script>


<style>

    .company-info-div {
        padding: 15px;
    }

</style>