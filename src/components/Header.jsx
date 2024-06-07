import UserSalaryInfo from "./User/UserSalaryInfo";

const Header = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-start mt-20 w-full">
                <h1 className="font-poppins font-semibold text-4xl">FAZLUL HAQUE BIDHYA NIKETON</h1>
                <UserSalaryInfo />
            </div>
        </>
    );
}

export default Header;