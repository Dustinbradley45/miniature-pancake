{/* <div class="polygonPlay">
    <div class="polygonPlay--Val1">
        <input type="text" id='val1--X'>
        <input type="text" id='val1--Y'>
    </div>
    <div class="polygonPlay--Val2">
        <input type="text" id='val2--X'>
        <input type="text" id='val2--Y'>
    </div>
    <div class="polygonPlay--Val3">
        <input type="text" id='val3--X'>
        <input type="text" id='val3--Y'>
    </div>
    <div class="polygonPlay--Val4">
        <input type="text" id='val4--X'>
        <input type="text" id='val4--Y'>
    </div>
    <button class='reset'>reset</button>
</div> */}

$(function () { 

// Circle Value(Radius)
    //Get user input val

    const changeRadius = []
    
    const getRadius = function () { 
        return $('#radiusVal').val();
    }
    
    // $('#getAnswer').change(function () { 
    //   console.log($('#getAnswer'))
    // })

  
    
    const insertCss = function () {
        $('.circleClip').css('clip-path', `radius(changeRadius[${loggedId}])`)
    }
    const loggedId = changeRadius.length;
    const getUserRadius = $('#getAnswer').on('click', function () {
        changeRadius.push(getRadius());
        
        console.log(changeRadius)
        console.log(changeRadius.length)
    });





    

   
    
   

        // $('.getAnswer')
    

  
    }   

   

        
     
    


    // $('.reset').on('click', function () { 
    //     $('.polygonPlay--Val4').slideUp('slow');
    // })





)
