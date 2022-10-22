<div class="container">

    <div class="page-buttons-container">
        <Group variant="raised">

            {#each pages as page}
                <Button
                    on:click={ () => { changePage(page); } }
                    variant="raised"
                    color={page == currentPage ? "primary" : "secondary"}
                >
                    <Label>{page}</Label>
                </Button>
            {/each}

        </Group>
    </div>

    <slot/>

</div>



<script lang="ts">
    import { goto } from "$app/navigation";

    import Button, { Group, Label } from "@smui/button";

    export let pages: number[];
    export let currentPage: number;

    function changePage(page: number): void {
        const url = new URL(window.location.href);
        url.searchParams.set("page", page.toString());
        goto(url);
    }

</script>

<style lang="scss">

    .page-buttons-container {
        display: flex;
        justify-content: center;
    }

</style>