class Human {
    
    private int age = 5;
    private String name = "Anahita";

    public int getAge() { // method to access private data. this mehod is used to get the age
        return age;
        
    }

    public void setAge(int a) { // method to set the age.
        this.age = a;
    }

    public void setName(String n){
        this.name = n;
    }

    public String getName() {
        return name;
    }
}

public class encapsulation {
    public static void main (String []args) {
        Human obj = new Human();
        // obj.age = 12;
        // obj.name = "Anahita";

        obj.setAge(21);
        obj.setName("Rajpoot");
        System.out.println(obj.getName() + " : " + obj.getAge());
        
    }
}
