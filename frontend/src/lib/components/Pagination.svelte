<div class="container">

    <div class="page-buttons-container">
        <Group variant="raised">
            
            <Button
                on:click={ () => {changePage(1)} }
                variant="raised"
                disabled={pagination.current_page == 1}
            >
                <Label>&#60&#60</Label>
            </Button>

            <Button
                on:click={ () => {changePage(pagination.current_page-1)} }
                variant="raised"
                disabled={pagination.current_page == 1}
            >
                <Label>&#60</Label>
            </Button>


            {#each pagination.pages as page}
                <Button
                    on:click={ () => { changePage(page); } }
                    variant="raised"
                    color={page == pagination.current_page ? "primary" : "secondary"}
                >
                    <Label>{page}</Label>
                </Button>
            {/each}

            <Button
                on:click={ () => {changePage(pagination.current_page+1)} }
                variant="raised"
                disabled={pagination.current_page == pagination.total_pages}
            >
                <Label>></Label>
            </Button>

            <Button
                on:click={ () => {changePage(pagination.total_pages)} }
                variant="raised"
                disabled={pagination.current_page == pagination.total_pages}
            >
                <Label>>></Label>
            </Button>

        </Group>
    </div>

    <slot/>

</div>



<script lang="ts">
    import { goto } from "$app/navigation";
	import type { IPagination } from "$lib/shared/interfaces/Pagination";

    import Button, { Group, Label } from "@smui/button";

    export let pagination: IPagination;

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