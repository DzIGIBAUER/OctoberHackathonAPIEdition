<article>
    <div class="company-essential">
        <img class="company-logo" src={company.logo.toString()} alt={company.name} />
        <h2 class="mdc-typography--headline2">{company.name}</h2>
    </div>
    <p class="mdc-typography--body1 company-bio">{ @html parseForLinks(company.bio)}</p>


    {#if (company.twitter || company.linkedin )}
        <div class="company-links">
            {#if company.twitter}
                <Link href={company.twitter} targetBlank>Twitter</Link>
            {/if}

            {#if company.linkedin}
                <Link href={company.linkedin} targetBlank>LinkedIn</Link>
            {/if}
        </div>
    {/if}
</article>



<script lang="ts">
    import type ICompany from "$lib/shared/interfaces/Company";

    import Link from "./Link.svelte";

    import { parseForLinks } from "$lib/shared/utils/parseText";

    export let company: ICompany;

</script>


<style lang="scss">

    article {
        background-color: var(--mdc-theme-surface);
        border-radius: 15px;
        padding: 15px;
    }
    
    .company-essential {
        display: flex;
        flex-direction: column;
        align-items: center;
    
        h2 {
            margin-top: 0;
        }
    }

    .company-logo {
        width: 75px;
        border-radius: 50%;
    }

    .company-bio {
        text-align: center;
        white-space: pre-wrap;
    }

    .company-links {
        display: flex;
        justify-content: center;
    }

</style>