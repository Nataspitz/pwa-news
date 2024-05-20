import { HeaderList } from "../components/lists/headerList/HeaderList";
import { StyleMainContainer } from "../containers/StyleMainContainer";

export function Home() {
    return(
        <>
            <main>
                <StyleMainContainer>
                    <h1>PWA News</h1>
                    <HeaderList />
                </StyleMainContainer>
            </main>
        </>
    )
}