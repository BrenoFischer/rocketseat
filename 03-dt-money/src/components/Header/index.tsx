import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";

import LogoImage from '../../assets/logo.svg';
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={LogoImage} alt="" />
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>New Transaction</NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransactionModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}