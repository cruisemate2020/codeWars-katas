class God{
    /**
     * @returns Human[]
     */
    static create(){
        const Adam = new Man();
        const Eve = new Woman();
        return [Adam, Eve]
        }
}
    
class Human{}
class Man extends Human{}
class Woman extends Human{}