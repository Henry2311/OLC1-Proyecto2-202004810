%{
    const {Declaracion} = require('../Instructions/Declaracion');
    const {DeclaracionV} = require('../Instructions/DeclaracionV');
    const {Asignacion} = require('../Instructions/Asignacion');
    const {Print} = require('../Instructions/Print');
    const {Println} = require('../Instructions/Printl');
    const {Increment} = require('../Instructions/Increment');
    const {Ternary} = require('../Instructions/Ternary');
    const {Arithmetic} = require('../Expressions/Arithmetic');
    const {ArithmeticOption} = require('../Expressions/Arithmetic');
    const {Rational} = require('../Expressions/Rational');
    const {RationalOption} = require('../Expressions/Rational');
    const {Type} = require('../Symbol/type');
    const {Value} = require('../Expressions/Value')
    const {IDE} = require('../Expressions/IDE')
    var tmp = "";
%}

%lex
%options case-insensitive

%s caracter
%s cadena

entero  [0-9]+
decimal [0-9]+"."[0-9]+ 
boleano  "true"|"false" 

%%

"//".*                              // comentario simple línea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/] // comentario multiple líneas

<INITIAL>[']    {
                    this.begin('caracter')
                }

<caracter>[^']    {
                    tmp = tmp +  yytext;
                }
<caracter>[']     {
                    //this.begin('INITIAL'); 
                    this.popState();
                    yytext = tmp
                    console.log("reconoci token <caracter> con lexema: "+yytext)
                    tmp=""
                    return 'valorchar'
                }
<INITIAL>["]    {
                    this.begin('cadena')
                }

<cadena>[^"]    {
                    tmp = tmp +  yytext;
                }
<cadena>["]     {
                    //this.begin('INITIAL'); 
                    this.popState();
                    yytext = tmp
                    console.log("reconoci token <cadena> con lexema: "+yytext)
                    tmp=""
                    return 'valorstring'
                }
{decimal}       {
                    console.log("reconoci token <decimal> con lexema: "+yytext)
                    return "valordouble"
                } 
{entero}        {
                    console.log("reconoci token <entero> con lexema: "+yytext)
                    return "valorint"
                } 
{boleano}       {
                    console.log("reconoci token <boleano> con lexema: "+yytext)
                    return "valorboolean"
                }

"int"           {
                    console.log("reconoci token <int> con lexema: "+yytext)
                    return "int"
                }
"double"        {
                    console.log("reconoci token <double> con lexema: "+yytext)
                    return "double"
                }
"string"        {
                    console.log("reconoci token <string> con lexema: "+yytext)
                    return "string"
                }
"char"          {
                    console.log("reconoci token <char> con lexema: "+yytext)
                    return "char"
                }
"boolean"       {
                    console.log("reconoci token <boolean> con lexema: "+yytext)
                    return "boolean"
                }

"+"             {
                    console.log("reconoci token <mas> con lexema: "+yytext)
                    return "mas"
                }
"-"             {
                    console.log("reconoci token <menos> con lexema: "+yytext)
                    return "menos"
                }
"*"             {
                    console.log("reconoci token <por> con lexema: "+yytext)
                    return "por"
                }
"/"             {
                    console.log("reconoci token <divi> con lexema: "+yytext)
                    return "divi"
                }
"^"             {
                    console.log("reconoci token <pow> con lexema: "+yytext)
                    return "pow"
                }
"%"             {
                    console.log("reconoci token <mod> con lexema: "+yytext)
                    return "mod"
                }

"=="            {
                    console.log("reconoci token <igualq> con lexema: "+yytext)
                    return "igualq"
                }
"!="            {
                    console.log("reconoci token <noigual> con lexema: "+yytext)
                    return "noigual"
                }
"<="            {
                    console.log("reconoci token <menorigq> con lexema: "+yytext)
                    return "menorigq"
                }
">="            {
                    console.log("reconoci token <mayorigq> con lexema: "+yytext)
                    return "mayorigq"
                }
"="             {
                    console.log("reconoci token <igual> con lexema: "+yytext)
                    return "igual"
                }
"!"             {
                    console.log("reconoci token <negacion> con lexema: "+yytext)
                    return "negacion"
                }
"<"             {
                    console.log("reconoci token <menorq> con lexema: "+yytext)
                    return "menorq"
                }
">"             {
                    console.log("reconoci token <mayorq> con lexema: "+yytext)
                    return "mayorq"
                }
"?"             {
                    console.log("reconoci token <ternario> con lexema: "+yytext)
                    return "ternario"
                }
"||"            {
                    console.log("reconoci token <or> con lexema: "+yytext)
                    return "or"
                }
"&&"            {
                    console.log("reconoci token <and> con lexema: "+yytext)
                    return "and"
                }


","             {
                    console.log("reconoci token <coma> con lexema: "+yytext)
                    return "coma"
                }
":"             {
                    console.log("reconoci token <dospunto> con lexema: "+yytext)
                    return "dospunto"
                }
";"             {
                    console.log("reconoci token <puntocoma> con lexema: "+yytext)
                    return "puntocoma"
                }
"{"             {
                    console.log("reconoci token <llavea> con lexema: "+yytext)
                    return "llavea"
                }
"}"             {
                    console.log("reconoci token <llavec> con lexema: "+yytext)
                    return "llavec"
                }
"("             {
                    console.log("reconoci token <parena> con lexema: "+yytext)
                    return "parena"
                }
")"             {
                    console.log("reconoci token <parenc> con lexema: "+yytext)
                    return "parenc"
                }
"["             {
                    console.log("reconoci token <corchetea> con lexema: "+yytext)
                    return "corchetea"
                }
"]"             {
                    console.log("reconoci token <corchetec> con lexema: "+yytext)
                    return "corchetec"
                }

"new"           {
                    console.log("reconoci token <new> con lexema: "+yytext)
                    return "new"
                }
"if"            {
                    console.log("reconoci token <if> con lexema: "+yytext)
                    return "if"
                }
"else"          {
                    console.log("reconoci token <else> con lexema: "+yytext)
                    return "else"
                }
"switch"        {
                    console.log("reconoci token <switch> con lexema: "+yytext)
                    return "switch"
                }
"case"          {
                    console.log("reconoci token <case> con lexema: "+yytext)
                    return "case"
                }
"default"       {
                    console.log("reconoci token <default> con lexema: "+yytext)
                    return "default"
                }
"while"         {
                    console.log("reconoci token <while> con lexema: "+yytext)
                    return "while"
                }
"for"           {
                    console.log("reconoci token <for> con lexema: "+yytext)
                    return "for"
                }
"do"            {
                    console.log("reconoci token <do> con lexema: "+yytext)
                    return "do"
                }
"break"         {
                    console.log("reconoci token <break> con lexema: "+yytext)
                    return "break"
                }
"continue"      {
                    console.log("reconoci token <continue> con lexema: "+yytext)
                    return "continue"
                }
"return"        {
                    console.log("reconoci token <return> con lexema: "+yytext)
                    return "return"
                }
"void"          {
                    console.log("reconoci token <void> con lexema: "+yytext)
                    return "void"
                }
"print"         {
                    console.log("reconoci token <print> con lexema: "+yytext)
                    return "print"
                }
"println"       {
                    console.log("reconoci token <println> con lexema: "+yytext)
                    return "println"
                }
"tolower"       {
                    console.log("reconoci token <tolower> con lexema: "+yytext)
                    return "tolower"
                }
"toupper"       {
                    console.log("reconoci token <toupper> con lexema: "+yytext)
                    return "toupper"
                }
"round"         {
                    console.log("reconoci token <round> con lexema: "+yytext)
                    return "round"
                }
"length"        {
                    console.log("reconoci token <length> con lexema: "+yytext)
                    return "length"
                }
"typeof"        {
                    console.log("reconoci token <typeof> con lexema: "+yytext)
                    return "typeof"
                }
"tostring"      {
                    console.log("reconoci token <tostring> con lexema: "+yytext)
                    return "tostring"
                }
"tochararray"   {
                    console.log("reconoci token <tochararray> con lexema: "+yytext)
                    return "tochararray"
                }
"run"           {
                    console.log("reconoci token <run> con lexema: "+yytext)
                    return "run"
                }

([a-zA-Z_])[a-zA-Z0-9_ñÑ]*	{
                                console.log("reconoci token <identificador> con lexema: "+yytext)
                                return "identificador";
                            }

\t  {}
\r  {}
\n  {}
\s  {}

<<EOF>>		            return 'EOF'

.   { 
        console.log("error lexico");
    }

/lex

%left "or"
%left "and"
%right "negacion"
%left "igualq" "mayorigq" "mayorq" "menorigq" "menorq" "noigual"
%left "mas" "menos"
%left "por" "divi" "mod"
% "pow"
%right UMENOS

%start INIT

%%

INIT    
    : INSTRUCCIONES EOF  {console.log("Analisis sintactico completo"); return $1;}
;

INSTRUCCIONES
    : INSTRUCCIONES INSTRUCCION {$1.push($2); $$ = $1;}
    | INSTRUCCION               {$$ = [$1]}
;

INSTRUCCION
    : DECLARACION "puntocoma"   {$$ = $1}
    | ASIGNACION "puntocoma"    {$$ = $1}
    | INDECRE "puntocoma"       
    | MODIFICACIONV "puntocoma"
    | IFSENTENCIA
    | SWITCHSENTENCIA 
    | CICLOWHILE
    | CICLOFOR
    | CICLODOWHILE
    | FUNCTION
    | METODO
    | LLAMADA "puntocoma"
    | FUNPRINT "puntocoma"      {$$ = $1}
    | FUNPRINTLN "puntocoma"    {$$ = $1}
    | EJECUTAR "puntocoma"
    | 
;

EJECUTAR
    : "run" "identificador" "parena" LISTAEXP "parenc"
    | "run" "identificador" "parena" "parenc"
;

LISTAEXP
    : LISTAEXP "coma" EXPRESION
    | EXPRESION
;

NATIVAS
    : FUNLOWER
    | FUNUPPER
    | FUNROUND
    | FUNLENGTH
    | FUNTYPE
    | FUNTOSTRING
    | FUNTOCHAR
;

FUNTOCHAR
    : "tochararray" "parena" EXPRESION "parenc"
;

FUNTOSTRING
    : "tostring" "parena" EXPRESION "parenc"
;

FUNTYPE
    : "typeof" "parena" EXPRESION "parenc"
;

FUNLENGTH
    : "length" "parena" EXPRESION "parenc"
;

FUNROUND
    : "round" "parena" EXPRESION "parenc"
;

FUNLOWER
    : "tolower" "parena" EXPRESION "parenc"
;

FUNUPPER
    : "toupper" "parena" EXPRESION "parenc"
;

FUNPRINT
    : "print" "parena" EXPRESION "parenc"   {$$ = new Print($3,@1.first_line, @1.first_column)}
;

FUNPRINTLN
    : "println" "parena" EXPRESION "parenc" {$$ = new Println($3,@1.first_line, @1.first_column)}
;

METODO
    : "identificador" "parena" TIPO "identificador" PARAMETROS "parenc" "dospunto" "void" "llavea" INSTRUCCIONES "llavec"
    | "identificador" "parena" "parenc" "dospunto" "void" "llavea" INSTRUCCIONES "llavec"
    | "identificador" "parena" PARAMETROS "parenc" "llavea" INSTRUCCIONES "llavec"
    | "identificador" "parena" "parenc" "llavea" INSTRUCCIONES "llavec"
;

FUNCTION
    : "identificador" "parena" TIPO "identificador" PARAMETROS "parenc" "dospunto" TIPO "llavea" INSTRUCCIONES "return" EXPRESION "llavec"
;

PARAMETROS
    : "coma" TIPO "identificador" PARAMETROS
    | "coma" TIPO "identificador"
;

LLAMADA
    : "identificador" "parena" "identificador" LLAMADAP "parenc"   
    | "identificador" "parena" "parenc" 
;

LLAMADAP
    : "coma" "identificador" LLAMADAP
    | "coma" "identificador"
;

CICLODOWHILE
    : "do" "llavea" INSTRUCCIONES TRANSFERENCIA "llavec" "while" "parena" EXPRESION "parenc"
;

CICLOFOR
    : "for" "parena" INICIOFOR "puntocoma" EXPRESION "puntocoma" ACTUALIZACION "parenc" "llavea" INSTRUCCIONES TRANSFERENCIA "llavec"
;

ACTUALIZACION
    : INDECRE
    | ASIGNACION
;

INICIOFOR
    : DECLARACION
    | ASIGNACION
;

CICLOWHILE
    : "while" "parena" EXPRESION "parenc" "llavea" INSTRUCCIONES TRANSFERENCIA "llavec"
;

SWITCHSENTENCIA
    : "switch" "parena" EXPRESION "parenc" "llavea" LISTACASES CASEDEF "llavec"
;

LISTACASES
    : "case" EXPRESION "dospunto" INSTRUCCIONES "break" "puntocoma" LISTACASES
    | "case" EXPRESION "dospunto" INSTRUCCIONES "break" "puntocoma"
    | "case" EXPRESION "dospunto" INSTRUCCIONES LISTACASES
    | "case" EXPRESION "dospunto" INSTRUCCIONES
;

CASEDEF
    : "default" "dospunto" INSTRUCCIONES "break" "puntocoma"
;

TRANSFERENCIA
    : "break" "puntocoma"
    | "continue" "puntocoma"
    | "return" EXPRESION "puntocoma"
    | "return" "puntocoma"
    | 
;

IFSENTENCIA
    : "if" "parena" EXPRESION "parenc" "llavea" INSTRUCCIONES TRANSFERENCIA "llavec"
    | "else" "llavea" INSTRUCCIONES TRANSFERENCIA "llavec"
    | "else" "if" "parena" EXPRESION "parenc" "llavea" INSTRUCCIONES TRANSFERENCIA "llavec" 
;

MODIFICACIONV
    : "identificador" "corchetea" EXPRESION "corchetec" "igual" EXPRESION
    | "identificador" "corchetea" EXPRESION "corchetec" "corchetea" EXPRESION "corchetec" "igual" EXPRESION
;

ACCESOV
    : "identificador" "corchetea" EXPRESION "corchetec"                                     {$$= new IDE($1,1,$3,null, @1.first_line, @1.first_column)}
    | "identificador" "corchetea" EXPRESION "corchetec" "corchetea" EXPRESION "corchetec"   {$$= new IDE($1,1,$3,$6, @1.first_line, @1.first_column)}
;

LISTAVALORESV
    : LISTAVALORESV "coma" VALOR                                 {$1.push($3); $$ = $1;}  
    | VALOR                                                      {$$ = [$1]}
;

LISTAVALORESM
    : LISTAVALORESM "coma" "corchetea" LISTAVALORESV "corchetec"  {$1.push($4); $$ = $1;} 
    | "corchetea" LISTAVALORESV "corchetec"                       {$$ = [$2]}
;

INDECRE
    : "identificador" "mas" "mas"          {$$ = new Increment($1,0,@1.first_line, @1.first_column)}        
    | "identificador" "menos" "menos"      {$$ = new Increment($1,1,@1.first_line, @1.first_column)} 
;

CASTEO
    : "parena" TIPO "parenc" EXPRESION
;

TERNARY
    : EXPRESION "ternario" EXPRESION "dospunto" EXPRESION   {$$ = new Ternary($1,$3,$5,@1.first_line, @1.first_column)}
;

ASIGNACION
    : "identificador" "igual" EXPRESION     {$$ = new Asignacion($1,$3,@1.first_line, @1.first_column)}
    | "identificador" "igual" CASTEO
    | "identificador" "igual" NATIVAS
;

DECLARACION
    : TIPO "identificador"                   {$$= new Declaracion($2,$1,null, @1.first_line, @1.first_column)}
    | TIPO "identificador" "igual" EXPRESION {$$= new Declaracion($2,$1,$4, @1.first_line, @1.first_column)}
    | TIPO  LISTAID                          {$$= new Declaracion($2,$1,null, @1.first_line, @1.first_column)}
    | TIPO  LISTAID "igual" EXPRESION        {$$= new Declaracion($2,$1,$4, @1.first_line, @1.first_column)}
    | TIPO "identificador" "corchetea" "corchetec" "igual" "new" TIPO "corchetea" EXPRESION "corchetec"  {$$= new DeclaracionV($2,$1,$9,null,null,0, @1.first_line, @1.first_column)}
    | TIPO "identificador" "corchetea" "corchetec" "corchetea" "corchetec" "igual" "new" TIPO "corchetea" EXPRESION "corchetec" "corchetea" EXPRESION "corchetec" {$$= new DeclaracionV($2,$1,$11,$14,null,0, @1.first_line, @1.first_column)}
    | TIPO "identificador" "corchetea" "corchetec" "igual" "corchetea" LISTAVALORESV "corchetec" {$$= new DeclaracionV($2,$1,null,null,$7,0,@1.first_line, @1.first_column)}
    | TIPO "identificador" "corchetea" "corchetec" "corchetea" "corchetec" "igual" "corchetea" LISTAVALORESM "corchetec" {$$= new DeclaracionV($2,$1,null,null,$9,1,@1.first_line, @1.first_column)}
    | TIPO "identificador" "corchetea" "corchetec" "igual" FUNTOCHAR
;

LISTAID
    : LISTAID "coma" "identificador"    {$1+=","+$3; $$ = $1;}
    | "identificador"                   {$$ = $1}
;

EXPRESION
    :  "menos" EXPRESION %prec UMENOS   {$$ = new Arithmetic(null,$2,ArithmeticOption.NEGACION,@1.first_line, @1.first_column)}
    |  EXPRESION "mas" EXPRESION        {$$ = new Arithmetic($1,$3,ArithmeticOption.MAS,@1.first_line, @1.first_column)}
    |  EXPRESION "menos" EXPRESION      {$$ = new Arithmetic($1,$3,ArithmeticOption.MENOS,@1.first_line, @1.first_column)}
    |  EXPRESION "por"  EXPRESION       {$$ = new Arithmetic($1,$3,ArithmeticOption.POR,@1.first_line, @1.first_column)}
    |  EXPRESION "divi" EXPRESION       {$$ = new Arithmetic($1,$3,ArithmeticOption.DIV,@1.first_line, @1.first_column)}
    |  EXPRESION "mod" EXPRESION        {$$ = new Arithmetic($1,$3,ArithmeticOption.MOD,@1.first_line, @1.first_column)}
    |  EXPRESION "pow" EXPRESION        {$$ = new Arithmetic($1,$3,ArithmeticOption.POW,@1.first_line, @1.first_column)}
    |  EXPRESION "igualq" EXPRESION     {$$ = new Rational($1,$3,RationalOption.IGUALQ,@1.first_line, @1.first_column)}
    |  EXPRESION "mayorq" EXPRESION     {$$ = new Rational($1,$3,RationalOption.MAYORQ,@1.first_line, @1.first_column)}
    |  EXPRESION "menorq" EXPRESION     {$$ = new Rational($1,$3,RationalOption.MENORQ,@1.first_line, @1.first_column)}
    |  EXPRESION "mayorigq" EXPRESION   {$$ = new Rational($1,$3,RationalOption.MAYORIGQ,@1.first_line, @1.first_column)}
    |  EXPRESION "menorigq" EXPRESION   {$$ = new Rational($1,$3,RationalOption.MENORIGQ,@1.first_line, @1.first_column)}
    |  EXPRESION "noigual" EXPRESION    {$$ = new Rational($1,$3,RationalOption.NOIGUAL,@1.first_line, @1.first_column)}
    |  EXPRESION "and" EXPRESION
    |  EXPRESION "or" EXPRESION
    |  "parena" EXPRESION "parenc"      {$$ = $2}
    |  INDECRE                          {$$ = $1}
    |  ACCESOV                          {$$ = $1}
    |  CASTEO                           {$$ = $1}
    |  TERNARY                          {$$ = $1}
    |  LLAMADA
    |  NATIVAS
    |  VALOR                            {$$ = $1}
;

TIPO
    : "int"     {$$=Type.INT}
    | "double"  {$$=Type.DOUBLE}
    | "string"  {$$=Type.STRING}
    | "char"    {$$=Type.CHAR}
    | "boolean" {$$=Type.BOOLEAN}
;

VALOR
    : "valorint"        {$$= new Value($1,Type.INT,  @1.first_line, @1.first_column)}
    | "valordouble"     {$$= new Value($1,Type.DOUBLE,  @1.first_line, @1.first_column)}
    | "valorstring"     {$$= new Value($1,Type.STRING,  @1.first_line, @1.first_column)}
    | "valorchar"       {$$= new Value($1,Type.CHAR,  @1.first_line, @1.first_column)}
    | "valorboolean"    {$$= new Value($1,Type.BOOLEAN,  @1.first_line, @1.first_column)}
    | "identificador"   {$$= new IDE($1,0,null,null, @1.first_line, @1.first_column)}
;
