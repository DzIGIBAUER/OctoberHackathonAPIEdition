<div class="container">

    <div class="page-buttons-container">
        <Group variant="raised">
            <Wrapper>
                <Button
                    on:click={ () => {changePage(1)} }
                    variant="raised"
                    disabled={pagination.current_page == 1}
                >
                    <Label>&#60&#60</Label>
                </Button>
                <Tooltip hideDelay={0}>First page</Tooltip>
            </Wrapper>

            <Wrapper>
                <Button
                    on:click={ () => {changePage(pagination.current_page-1)} }
                    variant="raised"
                    disabled={pagination.current_page == 1}
                >
                    <Label>&#60</Label>
                </Button>
                <Tooltip hideDelay={0}>Previous page</Tooltip>
            </Wrapper>


            {#each pagination.pages as page}
                <Wrapper>
                    <Button
                        on:click={ () => { changePage(page); } }
                        variant="raised"
                        color={page == pagination.current_page ? "primary" : "secondary"}
                    >
                        <Label>{page}</Label>
                    </Button>
                    <Tooltip hideDelay={0}>Page {page}</Tooltip>
                </Wrapper>
            {/each}

            <Wrapper>
                <Button
                    on:click={ () => {changePage(pagination.current_page+1)} }
                    variant="raised"
                    disabled={pagination.current_page == pagination.total_pages}
                >
                    <Label>></Label>
                </Button>
                <Tooltip hideDelay={0}>Next page</Tooltip>
            </Wrapper>

            <Wrapper>
                <Button
                    on:click={ () => {changePage(pagination.total_pages)} }
                    variant="raised"
                    disabled={pagination.current_page == pagination.total_pages}
                >
                    <Label>>></Label>
                </Button>
                <Tooltip hideDelay={0}>Last page</Tooltip>
            </Wrapper>

        </Group>
    </div>

</div>



<script lang="ts">
    import { goto } from "$app/navigation";
	import type IPagination from "$lib/shared/interfaces/Pagination";

    import Button, { Group, Label } from "@smui/button";
    import Tooltip, { Wrapper } from "@smui/tooltip";

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