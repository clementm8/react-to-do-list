import { AppBar, AppBarItem, AppBarItemGroup } from '../navigation';
import { MobileMenu } from '../menus/MobileMenu';
import { Anchor, AnchorLabel } from '../anchor/anchor';

function Navbar({ children, className }) {
    return (
        <AppBar className='flex justify-between py-3 px-4'>
            <AppBarItem className='text-red-500'>
                <Anchor href='/'>
                    <AnchorLabel>Branding</AnchorLabel>
                </Anchor>
            </AppBarItem>
            <AppBarItemGroup className='flex gap-6'>
                <Anchor href='demo' >
                    <AnchorLabel>Demo Page</AnchorLabel>
                </Anchor>
                <Anchor href='signin'>
                    <AnchorLabel>Sign In Page</AnchorLabel>
                </Anchor>
                <Anchor href='signup'>
                    <AnchorLabel>Sign Up Page</AnchorLabel>
                </Anchor>
            </AppBarItemGroup>
            <AppBarItemGroup className='inline-flex gap-3'>
                <MobileMenu/>
            </AppBarItemGroup>
        </AppBar>
    )
}

export { Navbar };
